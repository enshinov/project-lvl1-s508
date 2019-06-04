import { getRandomInt } from '..';
import { cons, car, cdr, toString } from 'hexlet-pairs';

export const topic = () => 'What is the result of the expression?';

const switchAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: break;
  }
};

export const questAnswer = () => {
  const operators = '+-*';
  const length = operators.length;
  const operator = operators[getRandomInt(0, length - 1)];
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const question = `${number1} ${operator} ${number2}`;
  const answer = `${switchAnswer(number1, number2, operator)}`;
  return cons(question, answer);
};
