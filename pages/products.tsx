import React from 'react';
import ProductList from '../components/Products/ProductList';

const Products: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Our Products</h1>
          <ProductList />
        </div>
      );
    };

export default Products;