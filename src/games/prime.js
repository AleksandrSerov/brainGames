import playGame from '../engine';

import getRandomIntNumber from '../generator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = getRandomIntNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => playGame(description, getRoundData);
