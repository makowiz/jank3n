'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';

export default function RoomPage() {
    const { publicKey, connected } = useWallet();
    const router = useRouter();
    const searchParams = useSearchParams();
  
    const inviteCode = searchParams.get('invite');
    const amountParam = searchParams.get('amount');
    const joined = searchParams.get('joined') === 'true';
    const isGuest = Boolean(inviteCode && amountParam && !joined);

    const walletShort = publicKey
    ? publicKey.toBase58().slice(0, 4) + '...' + publicKey.toBase58().slice(-4)
    : '未接続';

  useEffect(() => {
    if (!connected) router.push('/');
    if (isGuest) {
      // 👇 deposit へ強制リダイレクト
      router.push(`/bet?invite=${inviteCode}&amount=${amountParam}`);
    }
  }, [connected, isGuest, inviteCode, amountParam, router]);

  return (
    <main className="flex flex-col items-center justify-center gap-6 py-10 text-center">
      <p className="text-gray-600 text-lg">👤 あなた（{walletShort}）</p>

      <h2 className="text-xl font-bold text-blue-600">🔗 ルームに参加中</h2>

      {amountParam && (
        <p className="text-pink-600">💰 賭け金：{amountParam} SOL</p>
      )}

      {joined ? (
        <p className="text-green-600 font-semibold">✅ マッチング完了！対戦準備OKです！</p>
      ) : (
        <p className="text-gray-500">🕒 相手を待っています...</p>
      )}
    </main>
  );
}