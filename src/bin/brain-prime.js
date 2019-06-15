#!/usr/bin/env node
import brainPrimeGame from '../games/brainPrimeGame';
import {
  printGreetings,
  printHeadline,
  getPlayerName,
  getCountQuestions,
} from '../engine';

printHeadline(
  'Answer "yes" if given number is prime. Otherwise answer "no".\n',
);
const name = getPlayerName();
printGreetings(name);

brainPrimeGame(name, getCountQuestions());
