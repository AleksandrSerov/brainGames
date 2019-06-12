#!/usr/local/bin/node
import brainCalcGame from '../games/brainCalc';
import {
  printGreetings,
  printHeadline,
  askName,
  getCountQuestions,
} from '../engine';

printHeadline('What is the result of the expression?\n');
const name = askName();
printGreetings(name);

brainCalcGame(name, getCountQuestions());
