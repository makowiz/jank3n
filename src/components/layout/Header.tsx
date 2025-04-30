'use client';

import Link from 'next/link';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';


export function Header() {
  const { connected } = useWallet();
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-blue-600">
              JanK3n.fun
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-100">
              Home
            </Link>
            <Link href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">
              Guide
            </Link>
            <Link href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">
              Documents
            </Link>
          </nav>
          {connected && <WalletDisconnectButton />}
        </div>
      </div>
    </header>
  );
}
