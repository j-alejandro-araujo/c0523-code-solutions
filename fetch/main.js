fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Server returned ${response.status} status.`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Pokemon Data:', data);
  })
  .catch((error) => {
    console.log('Error:', error.message);
  });
