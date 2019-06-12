import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import { playGame, getRoundsCount } from '..';

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

export const createGameData = () => {
  let result;
  for (let i = 1; i <= getRoundsCount(); i += 1) {
    const number1 = getRandomInt(minNumber, maxNumber);
    const number2 = getRandomInt(minNumber, maxNumber);
    const question = `${number1} ${number2}`;
    const greatestDivisor = findGreatestDivisor(number1, number2);
    const answer = greatestDivisor.toString();
    result = cons(cons(question, answer), result);
  }
  return result;
};

export default () => playGame(gameTask, createGameData());
