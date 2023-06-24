import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ToggleButton text="Button1" color="yellow" />
      <ToggleButton text="Button2" color="green" />
      <ToggleButton text="Button3" color="orange" />
    </div>
  );
}

export default App;
