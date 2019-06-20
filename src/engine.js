import readlineSync from 'readline-sync';

const getPlayerName = () => readlineSync.question('May I have your name? ');

const playGame = (description, getRoundData) => {
  const countRounds = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);

  const playerName = getPlayerName();
  console.log(`Hello, ${playerName}!\n`);

  const iter = (count, acc) => {
    if (count === 0) {
      return acc;
    }
    const { question, correctAnswer } = getRoundData();
    console.log(`Question: ${question}\n`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
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

export default playGame;
