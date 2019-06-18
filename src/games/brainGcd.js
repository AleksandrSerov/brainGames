import { startGameProcessing } from '../engine';

import getRandomIntNumber from '../generator';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const countRounds = 3;

const getDivisors = (num) => {
  let res = [];
  for (let i = 1; i <= num; i += 1) {
    res = num % i === 0 ? [...res, i] : [...res];
  }
  return res;
};

const getGcd = (num1, num2) => {
  const arr1 = getDivisors(num1);
  const arr2 = getDivisors(num2);
  const resArr = arr1.filter(item => arr2.includes(item));
  return Math.max(...resArr);
};

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
