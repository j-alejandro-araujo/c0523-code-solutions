import './App.css';
import CustomButton from './CustomButton';

function App() {
  const handleCustomClick = (text) => {
    window.alert('You clicked the CustomButton: ' + text);
  };

  return (
    <div>
      <CustomButton
        text="Button1"
        color="blue"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Button2"
        color="purple"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Button3"
        color="red"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
