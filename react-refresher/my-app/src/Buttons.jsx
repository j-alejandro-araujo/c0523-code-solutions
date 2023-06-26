import React from 'react';

function Buttons({ increase, decrease }) {
  return (
    <div className="buttons-container">
      <button className="down-btn" onClick={decrease}>
        DOWN
      </button>
      <button className="up-btn" onClick={increase}>
        UP
      </button>
    </div>
  );
}

export default Buttons;
