import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">My Shopping Site</Link>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-blue-300">Home</Link>
          <Link href="/products" className="hover:text-blue-300">Products</Link>
          <Link href="/cart" className="hover:text-blue-300">Cart</Link>
          <Link href="/profile" className="hover:text-blue-300">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;