import React from 'react';

const CustomButton = ({ text, className, style }) => {
  return (
    <button className={className} style={style}>
      {text}
    </button>
  );
};

export default CustomButton;
