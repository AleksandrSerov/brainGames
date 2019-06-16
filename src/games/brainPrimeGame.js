import {
  getCountQuestions,
  getRandomIntNumber,
  gameProcessing,
} from '../engine';

const HEADLINE_EXPRESSION = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
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

const countQuestion = getCountQuestions();

export const startGame = () => {
  gameProcessing(HEADLINE_EXPRESSION, countQuestion, getRoundData);
};

export default startGame;
