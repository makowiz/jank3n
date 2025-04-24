export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © {new Date().getFullYear()} オレオレFooter
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              About
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              お問い合わせ
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              Next.js
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
