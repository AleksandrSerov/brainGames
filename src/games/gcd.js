import startGameProcessing from '../engine';

import getRandomIntNumber from '../generator';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const countRounds = 3;

const getGcd = (num1, num2) => (num1 !== 0 ? getGcd(num2 % num1, num1) : num2);

const getRoundData = () => {
  const num1 = getRandomIntNumber(1, 100);
  const num2 = getRandomIntNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return {
    question,
    correctAnswer,
  };
};

const startGame = () => {
  startGameProcessing(gameDescription, countRounds, getRoundData);
};

export default startGame;
