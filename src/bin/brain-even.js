#!/usr/local/bin/node
import brainEvenGame from '../games/brainEven';
import {
  printGreetings,
  printHeadline,
  askName,
  getCountQuestions,
} from '../engine';

printHeadline('Answer "yes" if number even otherwise answer "no".\n');
const name = askName();
printGreetings(name);

brainEvenGame(name, getCountQuestions());
