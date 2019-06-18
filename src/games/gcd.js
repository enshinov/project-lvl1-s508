import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import playGame from '..';

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

const minRandomInt = 0;
const maxRandomInt = 100;

const getQuestionAnswer = () => {
  const number1 = getRandomInt(minRandomInt, maxRandomInt);
  const number2 = getRandomInt(minRandomInt, maxRandomInt);
  const question = `${number1} ${number2}`;
  const answer = findGreatestDivisor(number1, number2).toString();
  return cons(question, answer);
};

export default () => playGame(gameTask, getQuestionAnswer);
