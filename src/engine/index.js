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

export const getGameData = (countQuestion, getRoundData) => {
  const iter = (count, acc) => {
    if (count === 0) {
      return acc;
    }
    const { question, correctAnswer } = getRoundData();
    acc.questions.push(question);
    acc.correctAnswers.push(correctAnswer);
    return iter(count - 1, acc);
  };
  const defaultAcc = {
    questions: [],
    correctAnswers: [],
  };
  return iter(countQuestion, defaultAcc);
};

export const gameProcessing = (headlineExpression, countQuestions, data) => {
  const { questions, correctAnswers } = data;
  printHeadline(headlineExpression);

  const playerName = getPlayerName();
  printGreetings(playerName);

  for (let i = 0; i < countQuestions; i += 1) {
    console.log(`Question: ${questions[i]}\n`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswers[i] || Number(playerAnswer) === correctAnswers[i]) {
      console.log('Correct!');
      if (i === countQuestions - 1) {
        console.log(`Congratulations, ${playerName}`);
      }
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.\n`,
      );
      console.log(`Let's try again, ${playerAnswer}!\n`);
      return;
    }
  }
};

export default {
  printHeadline,
  printGreetings,
  getPlayerName,
  getCountQuestions,
  getRandomIntNumber,
  gameProcessing,
  getGameData,
};
