import readlineSync from 'readline-sync';

const getProgression = (step, start, count = 10) => {
  const res = [start];
  for (let i = 1; i < count; i += 1) {
    res.push(res[i - 1] + step);
  }
  return res;
};

const brainProgression = (name, countQuestion) => {
  if (!countQuestion) {
    return;
  }

  const step = Math.floor(Math.random() * 10 + 1);
  const start = Math.floor(Math.random() * 100);

  const list = getProgression(step, start);

  const correctAnswerId = Math.floor(Math.random() * list.length);
  const correctAnswer = list[correctAnswerId];

  console.log(
    `Question: ${list.slice(0, correctAnswerId)} .. ${list.slice(
      correctAnswerId + 1,
    )}\n`,
  );
  const answer = readlineSync.question('Your answer: ');

  if (Number(answer) === correctAnswer) {
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
