import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

// Sample product data
const products = [
  { id: 1, name: 'T-Shirt', category: 'Clothing', price: 19.99, image: '/images/slide1.jpeg'},
  { id: 2, name: 'Jeans', category: 'Clothing', price: 49.99, image: '/images/slide2.jpg'},
  { id: 3, name: 'Sneakers', category: 'Shoes', price: 79.99, image: '/images/slide3.jpeg'},
  { id: 4, name: 'Watch', category: 'Accessories', price: 129.99, image: '/images/slide4.jpeg'},
  // Add more products as needed
];

const categories = ['All', 'Clothing', 'Shoes', 'Accessories'];

const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(200);

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    product.price <= priceRange
  );

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Categories</h3>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left py-2 px-4 rounded transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-blue-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Price Range</h3>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-2">Max Price: ${priceRange}</p>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="w-full md:w-3/4">
        <div className="flex flex-wrap -mx-2">
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 hover:text-blue-600">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.category}</p>
                    <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
                  </div>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded transition-all duration-300 hover:bg-blue-600 hover:shadow-md transform hover:-translate-y-1">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;