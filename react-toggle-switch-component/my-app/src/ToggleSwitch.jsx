import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prevState) => !prevState);
  };

  let switchClass = 'off';
  if (isOn) {
    switchClass = 'on';
  }

  return (
    <div className="toggle-switch-container">
      <div className={`toggle-switch ${switchClass}`} onClick={handleClick}>
        <div className="switch"></div>
      </div>
      <span className="label">{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
};

export default ToggleSwitch;
