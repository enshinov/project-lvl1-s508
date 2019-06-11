import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import { startGameEngine, getCountOfRounds } from '..';

const gameTask = 'What is the result of the expression?';

const getCalculation = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '+': result = number1 + number2;
      break;
    case '-': result = number1 - number2;
      break;
    case '*': result = number1 * number2;
      break;
    default: result = NaN;
  }
  return result;
};

const operators = '+-*';

const minNumber = 0;
const maxNumber = 100;

export const getQuestionAnswer = () => {
  const countOfOperators = operators.length;
  const operator = operators[getRandomInt(0, countOfOperators - 1)];
  const number1 = getRandomInt(minNumber, maxNumber);
  const number2 = getRandomInt(minNumber, maxNumber);
  const question = `${number1} ${operator} ${number2}`;
  const calculation = getCalculation(number1, number2, operator);
  const answer = calculation.toString();
  return cons(question, answer);
};

const createGameData = (GameData, countOfSteps) => {
  if (countOfSteps < 1) return GameData;
  return createGameData(cons(getQuestionAnswer(), GameData), countOfSteps - 1);
};

const fullGameData = createGameData(getQuestionAnswer(), getCountOfRounds());

export default () => startGameEngine(gameTask, fullGameData);
