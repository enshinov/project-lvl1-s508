import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';


export const topic = () => 'Find the greatest common divisor of given numbers.';

const correctAnswer = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export const questAnswer = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const answer = `${correctAnswer(number1, number2)}`;
  return cons(question, answer);
};
