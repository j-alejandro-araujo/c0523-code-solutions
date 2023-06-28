import React, { useState } from 'react';
import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton onClick={handlePrev} />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onClick={handleIndicatorClick}
      />
      <NextButton onClick={handleNext} />
    </div>
  );
}
