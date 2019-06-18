import readlineSync from 'readline-sync';

const printHeadline = (expression) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${expression}`);
};

const printGreetings = (name) => {
  console.log(`Hello, ${name}!\n`);
};

const getPlayerName = () => readlineSync.question('May I have your name? ');

const startGameProcessing = (headlineExpression, countRounds, getRoundData) => {
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
  return iter(countRounds, null);
};

export default startGameProcessing;
