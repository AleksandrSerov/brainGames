#!/usr/local/bin/node
import readlineSync from 'readline-sync';

const OPERATORS = ['-', '+', '*'];
const COUNT_QUESTIONS = 3;

const game = (name, countQuestion) => {
  if (!countQuestion) {
    return;
  }

  const num1 = Math.round(Math.random() * 10);
  const num2 = Math.round(Math.random() * 10);
  const operator = OPERATORS[Math.floor(Math.random() * 3)];
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
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`,
    );
    console.log(`Let's try again, ${name}!\n`);
    return;
  }
  game(name, countQuestion - 1);
};

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\n`);

game(name, COUNT_QUESTIONS);
