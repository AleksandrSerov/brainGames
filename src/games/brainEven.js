import { startGameProcessing } from '../engine';
import { getRandomIntNumber } from '../generator';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const countRounds = 3;

const isEven = num => num % 2 === 0;

const getRoundData = () => {
  const num = getRandomIntNumber(0, 100);
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

const startGame = () => {
  startGameProcessing(gameDescription, countRounds, getRoundData);
};
export default startGame;
