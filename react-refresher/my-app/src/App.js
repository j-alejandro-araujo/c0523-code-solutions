import './App.css';
import { React, useState } from 'react';
import Buttons from './Buttons';

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>COUNTER</h1>
      </header>
      <span className="counter_number">{counter}</span>
      <Buttons increase={increase} decrease={decrease} />
    </div>
  );
}

export default App;
