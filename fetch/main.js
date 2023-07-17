async function fetchPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    if (!response.ok) {
      throw new Error(`Server returned ${response.status} status.`);
    }

    const data = await response.json();
    console.log('Pokemon Data:', data);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

fetchPokemonData();
