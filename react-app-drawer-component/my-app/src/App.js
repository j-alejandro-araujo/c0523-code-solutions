import './App.css';
import AppDrawer from './AppDrawer';

const menuItems = ['HOME', 'ABOUT', 'LEARN', 'SIGN IN', 'FAQ'];

function App() {
  return (
    <div className="App">
      <AppDrawer items={menuItems} title={'Menu'} />
    </div>
  );
}

export default App;
