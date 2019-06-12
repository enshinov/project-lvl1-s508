import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import { playGame, getRoundsCount } from '..';

const gameTask = 'What number is missing in the progression?';

const minNumber = 0;
const maxNumber = 100;

const progressionLength = 10;
const minStep = -10;
const maxStep = 10;
const minMisPosition = 1;
const maxMisPosition = progressionLength;

export const createGameData = () => {
  let result;
  for (let i = 1; i <= getRoundsCount(); i += 1) {
    let nextNumber = getRandomInt(minNumber, maxNumber);
    const progressionStep = getRandomInt(minStep, maxStep);
    const misingPosition = getRandomInt(minMisPosition, maxMisPosition);
    let progressionString = '';
    let missingNumber;
    for (let j = 1; j <= progressionLength; j += 1) {
      if (j === misingPosition) {
        missingNumber = nextNumber;
        progressionString = `${progressionString} ..`;
      } else {
        progressionString = `${progressionString} ${nextNumber}`;
      }
      nextNumber += progressionStep;
    }
    const question = progressionString;
    const answer = missingNumber.toString();
    result = cons(cons(question, answer), result);
  }
  return result;
};

export default () => playGame(gameTask, createGameData());
