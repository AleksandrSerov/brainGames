import readlineSync from 'readline-sync';

const printHeadline = (expression) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${expression}`);
};

const printGreetings = (name) => {
  console.log(`Hello, ${name}!\n`);
};

const getPlayerName = () => readlineSync.question('May I have your name? ');

export const getRandomIntNumber = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

export const getCountQuestions = () => 3;

export const gameProcessing = (
  headlineExpression,
  countQuestions,
  getRoundData,
) => {
  printHeadline(headlineExpression);
  const playerName = getPlayerName();
  printGreetings(playerName);

  const iter = (count, acc) => {
    if (count === 0) {
      return acc;
    }
    const { question, correctAnswer } = getRoundData();
    console.log(`Question: ${question}\n`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (
      playerAnswer === correctAnswer
      || Number(playerAnswer) === correctAnswer
    ) {
      console.log('Correct!');
      if (count === 1) {
        console.log(`Congratulations, ${playerName}`);
      }
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`,
      );
      console.log(`Let's try again, ${playerName}!\n`);
      return iter(0, acc);
    }

    return iter(count - 1, acc);
  };
  return iter(countQuestions, null);
};

export default {
  getCountQuestions,
  getRandomIntNumber,
  gameProcessing,
};
