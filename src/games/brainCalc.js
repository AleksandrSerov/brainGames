import startGameProcessing from '../engine';
import getRandomIntNumber from '../generator';

const operators = ['-', '+', '*'];
const gameDescription = 'What is the result of the expression?';
const countRounds = 3;

const getRoundData = () => {
  const operator = operators[getRandomIntNumber(0, operators.length - 1)];
  const num1 = getRandomIntNumber(0, 10);
  const num2 = getRandomIntNumber(0, 10);
  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;
  switch (operator) {
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }
  return {
    question,
    correctAnswer,
  };
};

const startGame = () => {
  startGameProcessing(gameDescription, countRounds, getRoundData);
};

export default startGame;
