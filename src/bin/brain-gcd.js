#!/usr/bin/env node
import brainGcdGame from '../games/brainGcd';
import {
  printGreetings,
  printHeadline,
  getPlayerName,
  getCountQuestions,
} from '../engine';

printHeadline('Find the greatest common divisor of given numbers.\n');
const name = getPlayerName();
printGreetings(name);

brainGcdGame(name, getCountQuestions());
