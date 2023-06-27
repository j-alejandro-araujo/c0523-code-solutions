console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  { name: 'Joe', hand: [] },
  { name: 'Carlos', hand: [] },
  { name: 'Alejandro', hand: [] },
  { name: 'Paul', hand: [] },
];

const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const deck = [];

for (const rank of ranks) {
  for (const suit of suits) {
    deck.push({ rank, suit });
  }
}

const shuffledDeck = _.shuffle(deck);

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < players.length; j++) {
    const card = shuffledDeck.pop();
    players[j].hand.push(card);
  }
}

const cardValues = {
  Ace: 11,
  King: 10,
  Queen: 10,
  Jack: 10,
  10: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
};

let highestScore = 0;
let winningPlayer = null;

for (const player of players) {
  let score = 0;

  for (const card of player.hand) {
    score += cardValues[card.rank];
  }

  if (score > highestScore) {
    highestScore = score;
    winningPlayer = player.name;
  }
}

console.log(`The winner is ${winningPlayer} with a score of ${highestScore}.`);
