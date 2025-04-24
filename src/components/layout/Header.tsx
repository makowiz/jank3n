export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="font-bold text-xl text-blue-600">
              JanK3n.fun
            </a>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="px-3 py-2 rounded-md hover:bg-gray-100">
              ホーム
            </a>
            <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">
              機能
            </a>
            <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100">
              ドキュメント
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
