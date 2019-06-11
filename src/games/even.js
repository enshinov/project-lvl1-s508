import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import { startGameEngine, getCountOfRounds } from '..';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return result;
};

const minNumber = 0;
const maxNumber = 100;

const getQuestionAnswer = () => {
  const question = getRandomInt(minNumber, maxNumber);
  const answer = isEven(question);
  return cons(question, answer);
};

const createGameData = (GameData, countOfSteps) => {
  if (countOfSteps < 1) return GameData;
  return createGameData(cons(getQuestionAnswer(), GameData), countOfSteps - 1);
};

const fullGameData = createGameData(getQuestionAnswer(), getCountOfRounds());

export default () => startGameEngine(gameTask, fullGameData);
