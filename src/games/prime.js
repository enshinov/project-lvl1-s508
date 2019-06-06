import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';

export const topic = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const questAnswer = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const question = getRandomInt(minNumber, maxNumber);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return cons(question, answer);
};
