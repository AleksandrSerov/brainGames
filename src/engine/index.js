import readlineSync from 'readline-sync';

export const printHeadline = expression => {
  console.log('Welcome to the Brain Games!');
  console.log(`${expression}`);
};

export const printGreetings = name => {
  console.log(`Hello, ${name}!\n`);
};

export const getCountQuestions = () => 3;

export const askName = () => readlineSync.question('May I have your name? ');

export default {
  printHeadline,
  printGreetings,
  askName,
  getCountQuestions,
};
