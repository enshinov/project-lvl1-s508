import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import playGame from '..';

const gameTask = 'What number is missing in the progression?';

const minNumber = 0;
const maxNumber = 100;

const progressionLength = 10;
const minStep = -10;
const maxStep = 10;
const minMisPosition = 1;

export const createGameData = () => {
  const getAnswerQuestion = () => {
    const startNumber = getRandomInt(minNumber, maxNumber);
    const progressionStep = getRandomInt(minStep, maxStep);
    const misingPosition = getRandomInt(minMisPosition, progressionLength);
    let progressionString = '';
    let missingNumber;
    for (let i = 0; i <= progressionLength; i += 1) {
      const nextNumber = startNumber + progressionStep * i;
      if (i === misingPosition) {
        missingNumber = nextNumber;
        progressionString = `${progressionString} ..`;
      } else {
        progressionString = `${progressionString} ${nextNumber}`;
      }
    }
    const question = progressionString;
    const answer = missingNumber.toString();
    return cons(question, answer);
  };
  return getAnswerQuestion;
};

export default () => playGame(gameTask, createGameData());
