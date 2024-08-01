import React from 'react';
import Image from 'next/image';
import slide1 from './images/slide1.jpeg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpeg';
import slide4 from './images/slide4.jpeg';

const categories = [
  { id: 1, name: 'Mens', image: slide1 },
  { id: 2, name: 'Women', image: slide2 },
  { id: 3, name: 'Kids', image: slide3 },
  { id: 4, name: 'Boys & Girls', image: slide4 }
];

const ProductTypes = () => (
  <div className="relative z-20 mt-8 overflow-hidden">
    <div className="marquee-container relative flex space-x-4 p-4">
      <div className="marquee flex">
        {categories.concat(categories).map((category, index) => (
          <div key={index} className="marquee-item flex flex-col items-center w-[20vw] h-[35vh] flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
            <div className="relative w-[90%] h-[90%] mb-2">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-sm font-semibold text-center">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .marquee-container {
        overflow: hidden;
      }
      .marquee {
        display: flex;
        width: 200%;
        animation: marquee 30s linear infinite;
      }
      .marquee:hover {
        animation-play-state: paused;
      }
    `}</style>
  </div>
);

export default ProductTypes;
