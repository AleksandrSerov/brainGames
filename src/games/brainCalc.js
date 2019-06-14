import readlineSync from 'readline-sync';
import { getPlayerName, getCountQuestions, getRandomIntNumber } from '../engine';

// printHeadline('What is the result of the expression?\n');
// const name = askName();
// printGreetings(name);

const OPERATORS = ['-', '+', '*'];

const gameProcessing = (name, countQuestion) => {
  if (!countQuestion) {
    return;
  }

  const num1 = getRandomIntNumber(0, 10);
  const num2 = getRandomIntNumber(0, 10);
  const operator = OPERATORS[getRandomIntNumber(0, 2)];

  console.log(`Question: ${num1} ${operator} ${num2}\n`);
  const answer = readlineSync.question('Your answer: ');
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
  if (Number(answer) === Number(correctAnswer)) {
    console.log('Correct!');
    if (countQuestion === 1) {
      console.log(`Congratulations, ${name}`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
    console.log(`Let's try again, ${name}!\n`);
    return;
  }
  gameProcessing(name, countQuestion - 1);
};

export const startGame = () => gameProcessing(getPlayerName(), getCountQuestions());

export default startGame;
