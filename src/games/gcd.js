import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import playGame from '..';

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

const createGameData = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const getQuestionAnswer = () => {
    const number1 = getRandomInt(minNumber, maxNumber);
    const number2 = getRandomInt(minNumber, maxNumber);
    const question = `${number1} ${number2}`;
    const greatestDivisor = findGreatestDivisor(number1, number2);
    const answer = greatestDivisor.toString();
    return cons(question, answer);
  };
  return cons(gameTask, getQuestionAnswer);
};

export default () => playGame(createGameData());
