import './App.css';
import PokemonList from './PokemonList';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

function App() {
  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <PokemonList pokedex={pokedex} />
    </div>
  );
}

export default App;
