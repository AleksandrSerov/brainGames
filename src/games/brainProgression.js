import startGameProcessing from '../engine';

import getRandomIntNumber from '../generator';

const gameDescription = 'What number is missing in the progression?';
const ListLength = 10;
const countRounds = 3;

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
  const list = getProgression(step, start, ListLength);
  const correctAnswerIndex = getRandomIntNumber(0, ListLength - 1);
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
