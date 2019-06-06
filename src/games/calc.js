import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';

export const topic = () => 'What is the result of the expression?';

const correctAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: break;
  }
};

export const questAnswer = () => {
  const operators = '+-*';
  const length = operators.length();
  const operator = operators[getRandomInt(0, length - 1)];
  const minNumber = 0;
  const maxNumber = 100;
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const question = `${number1} ${operator} ${number2}`;
  const answer = `${correctAnswer(number1, number2, operator)}`;
  return cons(question, answer);
};
