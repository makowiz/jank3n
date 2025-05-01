'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const betOptions = [0.01, 0.1, 1, 10, 100];


export default function BetPage() {
  const { publicKey, connected } = useWallet();
  const router = useRouter();

  const [selectedBet, setSelectedBet] = useState<number | null>(null);
  const [depositing, setDepositing] = useState(false);
  const [deposited, setDeposited] = useState(false);

  const inviteCode = useSearchParams().get('invite'); // ゲストの場合は入ってる
  const amountParam = useSearchParams().get('amount');
  const isGuest = Boolean(inviteCode && amountParam);



  useEffect(() => {
    if (!connected) router.push('/');
    if (isGuest) {
      // 👇 deposit へ強制リダイレクト
      router.push(`/bet?invite=${inviteCode}&amount=${amountParam}`);
    };
  }, [connected, router]);

  const handleBetSelect = async (value: number) => {
    setSelectedBet(value);
    setDepositing(true);
    setDeposited(false);

    // 仮処理：2秒後に"Deposit完了"とする
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setDepositing(false);
    setDeposited(true);
  };

  const handleStart = () => {
    if (!deposited) return;
    router.push('/room');
  };

  const handleDeposit = async () => {
    if (!selectedBet) return;
    setDepositing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setDepositing(false);
    setDeposited(true);

    if (isGuest) {
      router.push(`/room?invite=${inviteCode}&amount=${selectedBet}&joined=true`);
    } else {
      const generatedInvite = Math.random().toString(36).substring(2, 8);
      router.push(`/room?invite=${generatedInvite}&amount=${selectedBet}`);
    }
  };


  const walletShort = publicKey
  ? publicKey.toBase58().slice(0, 4) + '...' + publicKey.toBase58().slice(-4)
  : '未接続';


  

    return (
      <main className="flex flex-col items-center justify-center gap-6 py-10">
   <p className="text-gray-600 text-lg">👤 あなた({walletShort})</p>

<h2 className="text-xl font-bold text-blue-600">💰 賭け金を選んでください</h2>

{!isGuest && (
        <div className="flex flex-wrap gap-4 justify-center">
          {betOptions.map((value) => (
            <button
              key={value}
              onClick={() => handleBetSelect(value)}
              className={`px-6 py-3 rounded-full text-white text-lg transition
                ${selectedBet === value ? 'bg-pink-500' : 'bg-yellow-400 hover:bg-yellow-500'}`}
              disabled={depositing}
            >
              {value} SOL
            </button>
          ))}
        </div>
      )}

{/* 状態表示 */}
{selectedBet && !depositing && !deposited && (
  <p className="text-gray-700">選んだ金額：{selectedBet} SOL</p>
)}

{depositing && (
  <p className="text-yellow-600 font-semibold">💸 Deposit中です...（仮処理）</p>
)}

{deposited && (
  <p className="text-green-600 font-semibold">✅ Deposit完了！（仮）</p>
)}

<button
        onClick={handleDeposit}
        disabled={depositing || !selectedBet}
        className={`mt-4 px-6 py-3 text-white text-lg font-bold rounded-lg transition
          ${selectedBet ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
      >
        Depositして{isGuest ? 'ルームに戻る' : 'ルーム作成'}
      </button>
      </main>
    );
  }
  