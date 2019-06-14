import readlineSync from 'readline-sync';

export const printHeadline = (expression) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${expression}`);
};

export const printGreetings = (name) => {
  console.log(`Hello, ${name}!\n`);
};

export const getCountQuestions = () => 3;

export const getPlayerName = () => readlineSync.question('May I have your name? ');

export const getRandomIntNumber = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

export default {
  printHeadline,
  printGreetings,
  getPlayerName,
  getCountQuestions,
  getRandomIntNumber,
};
