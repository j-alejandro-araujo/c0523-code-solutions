import './App.css';
import { React, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>COUNTER</h1>
      </header>
      <span className="counter_number">{counter}</span>
      <div className="buttons-container">
        <button className="down-btn" onClick={decrease}>
          DOWN
        </button>
        <button className="up-btn" onClick={increase}>
          UP
        </button>
      </div>
    </div>
  );
}

export default App;
