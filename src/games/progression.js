import playGame from '../engine';

import getRandomInt from '../generator';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (step, init, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(init + step * i);
  }
  return progression;
};

const getRoundData = () => {
  const step = getRandomInt(1, 15);
  const start = getRandomInt(0, 100);
  const progression = getProgression(step, start, progressionLength);
  const hiddenItemIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = progression[hiddenItemIndex];

  const question = `${progression.slice(0, hiddenItemIndex)} .. ${progression.slice(hiddenItemIndex + 1)}`;

  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};

export default () => playGame(description, getRoundData);
