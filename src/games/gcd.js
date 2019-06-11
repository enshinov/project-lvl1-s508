import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import { startGameEngine, getCountOfRounds } from '..';

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const minNumber = 0;
const maxNumber = 100;

export const getQuestionAnswer = () => {
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const greatestDivisor = findGreatestDivisor(number1, number2);
  const answer = greatestDivisor.toString();
  return cons(question, answer);
};

const createGameData = (GameData, countOfSteps) => {
  if (countOfSteps < 1) return GameData;
  return createGameData(cons(getQuestionAnswer(), GameData), countOfSteps - 1);
};

const fullGameData = createGameData(getQuestionAnswer(), getCountOfRounds());

export default () => startGameEngine(gameTask, fullGameData);
