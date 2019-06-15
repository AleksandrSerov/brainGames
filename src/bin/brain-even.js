#!/usr/bin/env node
import brainEvenGame from '../games/brainEven';
import {
  printGreetings,
  printHeadline,
  getPlayerName,
  getCountQuestions,
} from '../engine';

printHeadline('Answer "yes" if number even otherwise answer "no".\n');
const name = getPlayerName();
printGreetings(name);

brainEvenGame(name, getCountQuestions());
