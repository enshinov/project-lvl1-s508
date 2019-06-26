import { cons } from 'hexlet-pairs';
import { l, cons as consList, toString } from '@hexlet/pairs-data';
import getRandomInt from '../getrandomint';
import playGame from '..';

const gameTask = 'What number is missing in the progression?';

const minRandomInt = 0;
const maxRandomInt = 100;

const progressionLength = 10;
const minStep = -10;
const maxStep = 10;

const getQuestionAnswer = () => {
  const init = getRandomInt(minRandomInt, maxRandomInt);
  const step = getRandomInt(minStep, maxStep);
  const missingPosition = getRandomInt(1, progressionLength);
  let progression = l();
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === missingPosition) {
      progression = consList('..', progression);
    } else {
      progression = consList(init + step * i, progression);
    }
  }
  const question = toString(progression);
  const answer = (init + step * missingPosition).toString();
  return cons(question, answer);
};

export default () => playGame(gameTask, getQuestionAnswer);
