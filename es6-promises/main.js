import takeAChance from './take-a-chance.js';

takeAChance('Jesus')
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });
