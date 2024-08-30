import React from 'react';
import MyCart from '../components/Cart/myCart';

const Cart: React.FC = () => {
    return (
        <>
          <div className="container mx-auto px-4 py-8 mt-16"> {/* Added mt-16 for top margin */}
            <h1 className="text-3xl font-bold mb-6">your Cart</h1>
            <MyCart />
          </div>
        </>
      );
    };

export default Cart;