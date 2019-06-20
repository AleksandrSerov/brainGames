import playGame from '../engine';
import getRandomIntNumber from '../generator';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

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
  playGame(gameDescription, getRoundData);
};
export default startGame;
