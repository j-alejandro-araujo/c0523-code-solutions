import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa';
import './Carousel.css';

const images = [
  '/images/001.png',
  '/images/004.png',
  '/images/007.png',
  '/images/025.png',
  '/images/039.png',
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleSlideClick = useCallback(
    (index) => {
      let interval = setInterval(nextSlide, 3000);
      setCurrentSlide(index);
      clearInterval(interval);
    },
    [nextSlide]
  );

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="carousel-images"
          className={`carousel-slide ${currentSlide === index ? 'active' : ''}`}
          onClick={() => handleSlideClick(index)}
        />
      ))}
      <div className="carousel-controls">
        <FaArrowLeft className="controls prev" onClick={prevSlide} />
        <FaArrowRight className="controls next" onClick={nextSlide} />
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <FaCircle
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleSlideClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
