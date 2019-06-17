import { getCountQuestions, gameProcessing } from '../engine';

import { getRandomIntNumber } from '../generator';

const ANSWERS = ['yes', 'no'];
const HEADLINE_EXPRESSION = 'Answer "yes" if number even otherwise answer "no".\n';

const getRoundData = () => {
  const num = getRandomIntNumber(0, 100);
  const question = `${num}`;
  const correctAnswer = ANSWERS[num % 2];
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
