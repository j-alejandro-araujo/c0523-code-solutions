import React from 'react';

const CustomButton = ({ text, color, onCustomClick }) => {
  const handleClick = () => {
    onCustomClick(text);
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {text}
    </button>
  );
};

export default CustomButton;
