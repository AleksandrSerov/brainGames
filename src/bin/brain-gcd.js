#!/usr/local/bin/node
import brainGcdGame from '../games/brainGcd';
import {
  printGreetings,
  printHeadline,
  askName,
  getCountQuestions,
} from '../engine';

printHeadline('Find the greatest common divisor of given numbers.\n');
const name = askName();
printGreetings(name);

brainGcdGame(name, getCountQuestions());
