import readlineSync from 'readline-sync';

const maxQuantityOfRounds = 3;

const playGame = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const iter = (count) => {
    if (count > maxQuantityOfRounds) {
      console.log(`Congratulations, ${playerName}`);
      return;
    }
    const { question, correctAnswer } = getRoundData();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    iter(count + 1);
  };
  iter(1);
};

export default playGame;
