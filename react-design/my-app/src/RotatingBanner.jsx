import React, { useState, useEffect } from 'react';

const RotatingBanner = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [items]);

  return (
    <div className="rotating-banner">
      <h1>{items[currentIndex]}</h1>
    </div>
  );
};

export default RotatingBanner;
