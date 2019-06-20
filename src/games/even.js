import playGame from '../engine';
import getRandomIntNumber from '../generator';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getRoundData = () => {
  const question = getRandomIntNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  playGame(gameDescription, getRoundData);
};
