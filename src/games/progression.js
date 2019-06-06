import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';


export const topic = () => 'What number is missing in the progression?';

export const questAnswer = () => {
  let nextNumber = getRandomInt(0, 100);
  const progressionStep = getRandomInt(-10, 10);
  const misingPosition = getRandomInt(1, 10);
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
