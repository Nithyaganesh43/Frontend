import { Outlet } from 'react-router-dom';

/**
 * Root layout with common elements (header, footer, etc.)
 * Wrap this around routes that share the same layout
 */
export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white px-4 py-3">
        <nav className="mx-auto max-w-7xl flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            App
          </a>
          {/* Add navigation links here */}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-gray-50 px-4 py-6">
        <div className="mx-auto max-w-7xl text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
