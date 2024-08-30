import React from 'react';
import { useCart } from './cartContext'; // Adjust the import path as needed
import Header from '../Header/Header'; // Adjust the import path as needed
import { TrashIcon, PlusIcon, MinusIcon } from 'lucide-react';
import Image from 'next/image';

const MyCart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
      return (
        <>
          <Header />
          <div className="container mx-auto px-4 py-8 mt-16">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <p>Your cart is empty. Start shopping!</p>
          </div>
        </>
      );
    }

    return (
        <>
          <Header />
          <div className="container mx-auto px-4 py-8 mt-16">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                  <div className="flex-shrink-0 w-24 h-24 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 focus:outline-none focus:text-gray-600"
                    >
                      <MinusIcon className="h-5 w-5" />
                    </button>
                    <span className="mx-2 text-gray-700">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 focus:outline-none focus:text-gray-600"
                    >
                      <PlusIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 focus:outline-none focus:text-red-600"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={clearCart}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-150"
                >
                  Clear Cart
                </button>
                <div className="text-xl font-semibold">
                  Total: ${getCartTotal().toFixed(2)}
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-150">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </>
    );
};

export default MyCart;