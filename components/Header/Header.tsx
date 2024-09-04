import React from 'react';
import Link from 'next/link';
import { useCart } from '../Cart/cartContext'; // Adjust the import path as needed
import { ShoppingCart } from 'lucide-react'; // Make sure to install lucide-react

const Header = () => {
  const { cart } = useCart();

  // Calculate total quantity of items in cart
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Ethnic Doriya
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-300">
            Products
          </Link>
          <Link href="/Cart" className="hover:text-blue-300 flex items-center">
            <ShoppingCart className="mr-1" size={20} />
            Cart
            {cartItemsCount > 0 && (
              <span className="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartItemsCount}
              </span>
            )}
          </Link>
          <Link href="/profile" className="hover:text-blue-300">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;