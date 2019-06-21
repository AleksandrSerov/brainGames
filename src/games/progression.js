import playGame from '../engine';

import getRandomIntNumber from '../generator';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (step, start, count) => {
  const progression = [];
  for (let i = 0; i < count; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getRoundData = () => {
  const step = getRandomIntNumber(1, 15);
  const start = getRandomIntNumber(0, 100);
  const progression = getProgression(step, start, progressionLength);
  const correctAnswerIndex = getRandomIntNumber(0, progressionLength - 1);
  const correctAnswer = progression[correctAnswerIndex];

  const question = `${progression.slice(0, correctAnswerIndex)} .. ${progression.slice(correctAnswerIndex + 1)}`;

  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};

export default () => playGame(gameDescription, getRoundData);
