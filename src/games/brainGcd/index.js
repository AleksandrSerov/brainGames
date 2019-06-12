import readlineSync from 'readline-sync';

const getDivisors = num => {
  let res = [];
  for (let i = 1; i <= num; i += 1) {
    res = num % i === 0 ? [...res, i] : [...res];
  }
  return res;
};

const getGcd = (num1, num2) => {
  const arr1 = getDivisors(num1);
  const arr2 = getDivisors(num2);
  const resArr = arr1.filter(item => arr2.includes(item));
  return Math.max(...resArr);
};

const brainGcd = (name, countQuestion) => {
  if (!countQuestion) {
    return;
  }

  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);

  console.log(`Question: ${num1} ${num2}\n`);
  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = getGcd(num1, num2);
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
  brainGcd(name, countQuestion - 1);
};

export default brainGcd;
