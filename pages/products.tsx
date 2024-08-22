import React from 'react';
import ProductList from '../components/Products/ProductList';
import Header from '../components/Header/Header';

const Products: React.FC = () => {
    return (
        <>
          <Header />
          <div className="container mx-auto px-4 py-8 mt-16"> {/* Added mt-16 for top margin */}
            <h1 className="text-3xl font-bold mb-6">Our Products</h1>
            <ProductList />
          </div>
        </>
      );
    };

export default Products;