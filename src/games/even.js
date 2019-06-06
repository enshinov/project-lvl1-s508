import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';

export const topic = () => 'Answer "yes" if number even otherwise answer "no".';

export const questAnswer = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const question = getRandomInt(minNumber, maxNumber);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return cons(question, answer);
};
