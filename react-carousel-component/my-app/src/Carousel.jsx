import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight, FaCircle } from 'react-icons/fa';
import './Carousel.css';

export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleSlideClick = useCallback(
    (index) => {
      const interval = setInterval(nextSlide);
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
