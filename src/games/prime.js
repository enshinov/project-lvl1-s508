import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';
import playGame from '..';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const minNumber = 0;
const maxNumber = 100;

export const createGameData = () => {
  const getAnswerQuestion = () => {
    const question = getRandomInt(minNumber, maxNumber);
    const answer = isPrime(question) ? 'yes' : 'no';
    return cons(question, answer);
  };
  return getAnswerQuestion;
};

export default () => playGame(gameTask, createGameData());
