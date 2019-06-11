#!/usr/local/bin/node
import readlineSync from 'readline-sync';

const ANSWERS = ['yes', 'no'];
const COUNT_QUESTIONS = 3;

const game = (name, countQuestion) => {
  if (!countQuestion) {
    return;
  }

  const number = Math.round(Math.random() * 100);
  console.log(`Question: ${number}\n`);
  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = ANSWERS[number % 2];
  if (answer === correctAnswer) {
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
console.log('Answer "yes" if number even otherwise answer "no".\n');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\n`);

game(name, COUNT_QUESTIONS);
