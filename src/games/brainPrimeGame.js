import readlineSync from 'readline-sync';

const isPrime = num => {
  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainProgression = (name, countQuestion) => {
  if (!countQuestion) {
    return;
  }
  const num = Math.floor(Math.random() * 100);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  console.log(`Question: ${num}\n`);
  const answer = readlineSync.question('Your answer: ');

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
  brainProgression(name, countQuestion - 1);
};

export default brainProgression;
