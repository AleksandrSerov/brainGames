#!/usr/bin/env node
import brainPrimeGame from '../games/brainPrimeGame';
import {
  printGreetings,
  printHeadline,
  askName,
  getCountQuestions,
} from '../engine';

printHeadline(
  'Answer "yes" if given number is prime. Otherwise answer "no".\n',
);
const name = askName();
printGreetings(name);

brainPrimeGame(name, getCountQuestions());
