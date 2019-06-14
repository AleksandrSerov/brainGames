#!/usr/local/bin/env node
import brainProgressionGame from '../games/brainProgression';
import {
  printGreetings,
  printHeadline,
  askName,
  getCountQuestions,
} from '../engine';

printHeadline('What number is missing in the progression?\n');
const name = askName();
printGreetings(name);

brainProgressionGame(name, getCountQuestions());
