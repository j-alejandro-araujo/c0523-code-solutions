import React, { useState } from 'react';
import './HotButton.css';

const HotButton = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const btnColorStyle = () => {
    const colors = [
      '#004643',
      '#007A74',
      '#00A39B',
      '#00CCC2',
      '#00F5E9',
      '#99FFFA',
      '#FFFFFF',
    ];
    const colorIndex = ((clickCount / 3) | 0) % colors.length;

    const currentColor = colors[colorIndex];
    return { backgroundColor: currentColor };
  };

  return (
    <div className="hot-btn-container">
      <button
        className="hot-button"
        onClick={handleClick}
        style={btnColorStyle()}>
        HOT BUTTON
      </button>
      <p className="btn-count">Clicks: {clickCount}</p>
    </div>
  );
};

export default HotButton;
