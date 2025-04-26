'use client'

import { usePathname } from 'next/navigation';
import './globals.css';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


const translations = {
  en: {
    title: 'Welcome to Jank3n!',
    description: 'Connect your wallet and start playing 🎮'
  },
  ja: {
    title: 'ジャンケンへようこそ！',
    description: 'ウォレットを接続してゲームを始めよう 🎮'
  }
};

export default function HomePage() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/ja') ? 'ja' : 'en';
  const t = translations[locale as 'en' | 'ja'];
  const { connected } = useWallet();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
      <p className="text-lg mb-8">{t.description}</p>

      {/* Wallet Connect Button */}
      <WalletMultiButton />

      {/* Optional: 接続ステータス */}
      {connected && (
        <p className="text-green-500 mt-4 font-semibold">Wallet Connected! ✅</p>
      )}
    </main>
  );

}
