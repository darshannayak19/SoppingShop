import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from './images/slide1.jpg';
import Image from 'next/image';

const imageStyle = {
  width: '100%',
  height: '500px'
};
const Slideshow = () => (
  <div className="relative flex justify-center items-center bg-gray-100">
  <Carousel
    showThumbs={false}
    autoPlay
    infiniteLoop
    showArrows={false}
    className="custom-carousel"
  >
    <div className="carousel-slide">
      <Image
        src={slide1}
        style={imageStyle}
        alt="Slide 1"
      />
      <p className="legend">Caption for Slide 1</p>
    </div>
    <div className="carousel-slide">
      <Image
        src={slide1}
        style={imageStyle}
        alt="Slide 2"
      />
      <p className="legend">Caption for Slide 2</p>
    </div>
    <div className="carousel-slide">
      <Image
        src={slide1}
        style={imageStyle}
        alt="Slide 3"
      />
      <p className="legend">Caption for Slide 3</p>
    </div>
  </Carousel>
</div>
);

export default Slideshow;