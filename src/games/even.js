import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import playGame from '..';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const minNumber = 0;
const maxNumber = 100;

const createGameData = () => {
  const getAnswerQuestion = () => {
    const question = getRandomInt(minNumber, maxNumber);
    const answer = isEven(question) ? 'yes' : 'no';
    return cons(question, answer);
  };
  return getAnswerQuestion;
};

export default () => playGame(gameTask, createGameData());
