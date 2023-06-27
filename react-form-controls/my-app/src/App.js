import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div className="App">
      <h2>Form-Uncontrolled</h2>
      <RegistrationFormUncontrolled />
      <h2>Form-Controlled</h2>
      <RegistrationFormControlled />
    </div>
  );
}

export default App;
