import playGame from '../engine';

import getRandomInt from '../generator';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => (num1 !== 0 ? getGcd(num2 % num1, num1) : num2);

const getRoundData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};

export default () => playGame(description, getRoundData);
