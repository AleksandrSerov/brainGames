import {
  getCountQuestions,
  getRandomIntNumber,
  gameProcessing,
  getGameData,
} from '../engine';

const OPERATORS = ['-', '+', '*'];
const HEADLINE_EXPRESSION = 'What is the result of the expression?\n';

const getRoundData = () => {
  const operator = OPERATORS[getRandomIntNumber(0, 2)];
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

const countQuestion = getCountQuestions();
const data = getGameData(countQuestion, getRoundData);

export const startGame = () => {
  gameProcessing(HEADLINE_EXPRESSION, countQuestion, data);
};

export default startGame;
