import './App.css';
import RotatingBanner from './RotatingBanner';
import Banner from './Banner';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Indicators from './Indicators';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <RotatingBanner items={items} /> */}
        <Banner />
        <PrevButton />
        <Indicators />
        <NextButton />
      </header>
    </div>
  );
}

export default App;
