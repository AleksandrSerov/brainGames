import { startGameProcessing } from '../engine';

import getRandomIntNumber from '../generator';

const gameDescription = 'What number is missing in the progression?';
const LIST_LENGTH = 10;
const countRounds = 3;

const getProgression = (step, start, count) => {
  const res = [start];
  for (let i = 1; i < count; i += 1) {
    res.push(res[i - 1] + step);
  }
  return res;
};

const getRoundData = () => {
  const step = getRandomIntNumber(1, 15);
  const start = getRandomIntNumber(0, 100);
  const list = getProgression(step, start, LIST_LENGTH);
  const correctAnswerIndex = getRandomIntNumber(0, LIST_LENGTH - 1);
  const correctAnswer = list[correctAnswerIndex];

  const question = `${list.slice(0, correctAnswerIndex)} .. ${list.slice(
    correctAnswerIndex + 1,
  )}\n`;

  return {
    question,
    correctAnswer,
  };
};

const startGame = () => {
  startGameProcessing(gameDescription, countRounds, getRoundData);
};

export default startGame;
