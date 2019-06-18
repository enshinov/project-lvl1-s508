import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import playGame from '..';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const minRandomInt = 0;
const maxRandomInt = 100;

const getQuestionAnswer = () => {
  const question = getRandomInt(minRandomInt, maxRandomInt);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => playGame(gameTask, getQuestionAnswer);
