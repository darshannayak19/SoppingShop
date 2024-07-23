import Image from 'next/image';
import slide1 from './images/slide1.jpg';
const categories = [
  { id: 1, name: 'Electronics', image: slide1 },
  { id: 2, name: 'Fashion', image: slide1 },
  { id: 3, name: 'Home & Kitchen', image: slide1 }
];

const ProductTypes = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h1 className="text-3xl font-bold text-center mb-10">Product Categories</h1>
    <div className="flex flex-wrap justify-center gap-12">
      {categories.map(category => (
        <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden w-1/4 h-96 transform transition-transform duration-300 hover:scale-110">
          <div className="relative w-full h-80">
            <Image
              src={category.image}
              alt={category.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-xl font-semibold my-4 text-center">{category.name}</h2>
        </div>
      ))}
    </div>
  </div>
);

export default ProductTypes;