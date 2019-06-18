import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import playGame from '..';

const gameTask = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+': result = number1 + number2;
      break;
    case '-': result = number1 - number2;
      break;
    case '*': result = number1 * number2;
      break;
    default:
  }
  return result;
};

const operators = '+-*';

const minRandomInt = 0;
const maxRandomInt = 100;

const getQuestionAnswer = () => {
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const number1 = getRandomInt(minRandomInt, maxRandomInt);
  const number2 = getRandomInt(minRandomInt, maxRandomInt);
  const question = `${number1} ${operator} ${number2}`;
  const calculation = calculate(number1, number2, operator);
  const answer = calculation.toString();
  return cons(question, answer);
};

export default () => playGame(gameTask, getQuestionAnswer);
