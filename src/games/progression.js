import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import playGame from '..';

const minNumber = 0;
const maxNumber = 100;

const progressionLength = 10;
const minStep = -10;
const maxStep = 10;
const minMissingPosition = 1;

const createGameData = () => {
  const gameTask = 'What number is missing in the progression?';
  const getQuestionAnswer = () => {
    const startNumber = getRandomInt(minNumber, maxNumber);
    const progressionStep = getRandomInt(minStep, maxStep);
    const misingPosition = getRandomInt(minMissingPosition, progressionLength);
    let progression = '';
    const missingNumber = startNumber + progressionStep * misingPosition;
    for (let i = 0; i <= progressionLength; i += 1) {
      const nextNumber = startNumber + progressionStep * i;
      if (nextNumber === missingNumber) {
        progression = `${progression} ..`;
      } else {
        progression = `${progression} ${nextNumber}`;
      }
    }
    const question = progression;
    const answer = missingNumber.toString();
    return cons(question, answer);
  };
  return cons(gameTask, getQuestionAnswer);
};

export default () => playGame(createGameData());
