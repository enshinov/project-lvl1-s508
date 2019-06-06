import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';


export const topic = () => 'What number is missing in the progression?';

export const questAnswer = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const minStep = -10;
  const maxStep = 10;
  const minMisPosition = 1;
  const maxMisPosition = 10;
  let nextNumber = getRandomInt(minNumber, maxNumber);
  const progressionStep = getRandomInt(minStep, maxStep);
  const misingPosition = getRandomInt(minMisPosition, maxMisPosition);
  let progressionString = '';
  let missingNumber;
  let i = 1;
  while (i < 11) {
    if (i === misingPosition) {
      missingNumber = nextNumber;
      progressionString += ' ..';
    } else {
      progressionString += ` ${nextNumber}`;
    }
    nextNumber += progressionStep;
    i += 1;
  }
  const question = progressionString;
  const answer = `${missingNumber}`;
  return cons(question, answer);
};
