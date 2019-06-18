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

const minRandomInt = 0;
const maxRandomInt = 100;

const getQuestionAnswer = () => {
  const question = getRandomInt(minRandomInt, maxRandomInt);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => playGame(gameTask, getQuestionAnswer);
