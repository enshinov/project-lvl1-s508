import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import { playGame, getRoundsCount } from '..';

const gameTask = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const minNumber = 0;
const maxNumber = 100;

const createGameData = () => {
  let result;
  for (let i = 1; i <= getRoundsCount(); i += 1) {
    const question = getRandomInt(minNumber, maxNumber);
    const answer = (isEven(question)) ? 'yes' : 'no';
    result = cons(cons(question, answer), result);
  }
  return result;
};

export default () => playGame(gameTask, createGameData());
