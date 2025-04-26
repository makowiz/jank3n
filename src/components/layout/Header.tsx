import Link from 'next/link'

export function Header() {
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
              ホーム
            </Link>
            <Link href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">
              機能
            </Link>
            <Link href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">
              ドキュメント
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
