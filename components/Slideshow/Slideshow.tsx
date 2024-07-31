import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpeg';
import Image from 'next/image';

const Slideshow = () => (
  <div className="relative w-full">
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={true}
      className="custom-carousel"
    >
      {[slide1, slide2, slide3].map((slide, index) => (
        <div key={index} className="carousel-slide relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
          {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <p className="text-xl font-bold">Caption for Slide {index + 1}</p>
          </div> */}
        </div>
      ))}
    </Carousel>
  </div>
);

export default Slideshow;