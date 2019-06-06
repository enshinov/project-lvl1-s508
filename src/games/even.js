import { cons } from 'hexlet-pairs';
import getRandomInt from '../getrandomint';

export const topic = () => 'Answer "yes" if number even otherwise answer "no".';

export const questAnswer = () => {
  const question = getRandomInt(0, 100);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return cons(question, answer);
};
