import readlineSync from 'readline-sync';

const playGame = (description, getRoundData) => {
  const countRounds = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const iter = (count) => {
    if (count > countRounds) {
      return;
    }
    const { question, correctAnswer } = getRoundData();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      if (count > countRounds - 1) {
        console.log(`Congratulations, ${playerName}`);
      }
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      iter(countRounds + 1);
    }
    iter(count + 1);
  };
  iter(1, null);
};

export default playGame;
