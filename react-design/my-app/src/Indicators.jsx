import React from 'react';

export default function Indicators({ count, currentIndex, onClick }) {
  const handleIndicatorClick = (index) => {
    onClick(index);
  };

  const indicators = Array.from({ length: count }, (_, index) => (
    <button
      key={index}
      className={index === currentIndex ? 'active' : ''}
      onClick={() => handleIndicatorClick(index)}
      style={{
        padding: '1rem',
        fontSize: '1rem',
        fontWeight: 'bolder',
        backgroundColor: index === currentIndex ? 'green' : '',
      }}>
      {index}
    </button>
  ));
  return <div>{indicators}</div>;
}
