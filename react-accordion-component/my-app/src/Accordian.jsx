import React from 'react';
import './Accordian.css';

export default function Accordian({ title, content, isActive, onClick }) {
  return (
    <div className="accordian-item">
      <div
        className={`accordian-title ${isActive ? 'active' : ''}`}
        onClick={onClick}>
        <div>{title}</div>
      </div>
      {isActive && <div className="accordian-content">{content}</div>}
    </div>
  );
}
