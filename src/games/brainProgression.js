import { getCountQuestions, gameProcessing } from '../engine';

import { getRandomIntNumber } from '../generator';

const HEADLINE_EXPRESSION = 'What number is missing in the progression?\n';
const LIST_LENGTH = 10;
const getProgression = (step, start, count) => {
  const progression = [start];
  for (let i = 1; i < count; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
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

const countQuestion = getCountQuestions();

export const startGame = () => {
  gameProcessing(HEADLINE_EXPRESSION, countQuestion, getRoundData);
};

export default startGame;
