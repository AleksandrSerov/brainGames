import playGame from '../engine';
import getRandomInt from '../generator';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getRoundData = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => playGame(description, getRoundData);
