import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import { startGameEngine, getCountOfRounds } from '..';

const gameTask = 'What number is missing in the progression?';

const minNumber = 0;
const maxNumber = 100;
const minStep = -10;
const maxStep = 10;
const minMisPosition = 1;
const maxMisPosition = 10;

export const getQuestionAnswer = () => {
  let nextNumber = getRandomInt(minNumber, maxNumber);
  const progressionStep = getRandomInt(minStep, maxStep);
  const misingPosition = getRandomInt(minMisPosition, maxMisPosition);
  let progressionString = '';
  let missingNumber;
  for (let i = 1; i <= 10; i += 1) {
    if (i === misingPosition) {
      missingNumber = nextNumber;
      progressionString += ' ..';
    } else {
      progressionString += ` ${nextNumber}`;
    }
    nextNumber += progressionStep;
  }
  const question = progressionString;
  const answer = missingNumber.toString();
  return cons(question, answer);
};

const createGameData = (GameData, countOfSteps) => {
  if (countOfSteps < 1) return GameData;
  return createGameData(cons(getQuestionAnswer(), GameData), countOfSteps - 1);
};

const fullGameData = createGameData(getQuestionAnswer(), getCountOfRounds());

export default () => startGameEngine(gameTask, fullGameData);
