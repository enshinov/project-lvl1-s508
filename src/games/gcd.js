import { getRandomInt } from '..';
import { cons, car, cdr, toString } from 'hexlet-pairs';

export const topic = () => 'Find the greatest common divisor of given numbers.';

const switchAnswer = (a, b) => {
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
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const question = `${number1} ${number2}`;
  const answer = `${switchAnswer(number1, number2)}`;
  return cons(question, answer);
};
