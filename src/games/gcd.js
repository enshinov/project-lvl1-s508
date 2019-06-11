import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import { startGameEngine, getCountOfRounds } from '..';

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (number1, number2) => {
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
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
