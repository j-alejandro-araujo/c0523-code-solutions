import React from 'react';

export default function PrevButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: '1rem 2rem', fontSize: '22px' }}>
      PREV
    </button>
  );
}
