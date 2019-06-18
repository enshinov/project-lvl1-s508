import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import playGame from '..';

const gameTask = 'What number is missing in the progression?';

const minRandomInt = 0;
const maxRandomInt = 100;

const progressionLength = 10;
const minStep = -10;
const maxStep = 10;

const getQuestionAnswer = () => {
  const startProgression = getRandomInt(minRandomInt, maxRandomInt);
  const progressionStep = getRandomInt(minStep, maxStep);
  const misingPosition = getRandomInt(1, progressionLength);
  let progression = '';
  const missingNumber = startProgression + progressionStep * misingPosition;
  for (let i = 0; i <= progressionLength; i += 1) {
    const nextNumber = startProgression + progressionStep * i;
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

export default () => playGame(gameTask, getQuestionAnswer);
