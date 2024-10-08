import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import slide1 from '../Slideshow/images/slide1.jpg'

const items = [
  { id: 1, name: 'Banarasi Saree', description: 'The Banarasi saree is a traditional and highly coveted type of saree that originates from the city of Varanasi, India. It is known for its intricate designs, opulent silk fabric, and stunning craftsmanship. The Banarasi saree is typically made with pure silk and is adorned with elaborate motifs and patterns such as brocade, zari, and meenakari work.', image: slide1 },
  { id: 2, name: 'Banarasi Saree', description: 'The Banarasi saree is a traditional and highly coveted type of saree that originates from the city of Varanasi, India. It is known for its intricate designs, opulent silk fabric, and stunning craftsmanship. The Banarasi saree is typically made with pure silk and is adorned with elaborate motifs and patterns such as brocade, zari, and meenakari work.', image: slide1 },
  { id: 3, name: 'Banarasi Saree', description: 'The Banarasi saree is a traditional and highly coveted type of saree that originates from the city of Varanasi, India. It is known for its intricate designs, opulent silk fabric, and stunning craftsmanship. The Banarasi saree is typically made with pure silk and is adorned with elaborate motifs and patterns such as brocade, zari, and meenakari work.', image: slide1 },
  { id: 4, name: 'Banarasi Saree', description: 'The Banarasi saree is a traditional and highly coveted type of saree that originates from the city of Varanasi, India. It is known for its intricate designs, opulent silk fabric, and stunning craftsmanship. The Banarasi saree is typically made with pure silk and is adorned with elaborate motifs and patterns such as brocade, zari, and meenakari work.', image: slide1 },
];

const About = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
    return (
      <div className="relative z-20 mt-8 overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-100 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Items</h2>
        <div className="flex flex-col justify-center items-center space-y-12">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`w-4/5 h-112 p-4 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center bg-white rounded-lg shadow-lg`}
              data-aos="fade-up"
            >
              <div className="relative w-1/2 h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-1/2 p-6">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };  
  
export default About;