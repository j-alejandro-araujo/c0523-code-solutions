import React from 'react';

export default function NextButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: '1rem 2rem', fontSize: '22px' }}>
      NEXT
    </button>
  );
}
