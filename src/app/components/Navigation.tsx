'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex space-x-4 h-16 items-center">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              pathname === '/'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              pathname === '/about'
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
} 