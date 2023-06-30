import './App.css';
import SearchableList from './SearchableList';

const strings = [
  'May the Force be with you.',
  "Here's looking at you, kid.",
  'Hasta la vista, baby.',
  'We rob banks.',
  'Yer a wizard Harry.',
  'It does not do well to dwell on dreams and forget to live.',
  'Dobby is free.',
  'When in doubt, go to the library.',
  'I am a wizard, not a baboon brandishing a stick.',
  'Choice is an illusion created between those with power and those without',
  'The Matrix is everywhere. It is all around us. Even now in this very room',
  "What you know you can't explain, but you feel it. You've felt it your entire life",
  "Never send a human to do a machine's job",
  'There is no spoon.',
  "It's a Dangerous Business, Frodo, Going Out Your Door.",
  'All We Have to Decide Is What to Do with the Time That Is Given to Us.',
  'Even the Smallest Person Can Change the Course of the Future.',
  'One Does Not Simply Walk into Mordor.',
  'Death Is Just Another Path, One That We All Must Take.',
  'You Shall Not Pass!',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchableList strings={strings} />
      </header>
    </div>
  );
}

export default App;
