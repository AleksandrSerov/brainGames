import startGameProcessing from '../engine';

import getRandomIntNumber from '../generator';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const countRounds = 3;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const num = getRandomIntNumber(1, 100);
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

const startGame = () => {
  startGameProcessing(gameDescription, countRounds, getRoundData);
};

export default startGame;
