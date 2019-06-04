import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import * as evenFuncs from './games/even';
import * as calcFuncs from './games/calc';
import * as gcdFuncs from './games/gcd';

const selectTopic = (gameName) => {
  switch (gameName) {
    case 'even': return evenFuncs.topic();
    case 'calc': return calcFuncs.topic();
    case 'gcd': return gcdFuncs.topic();
    default: break;
  }
};

const selectQuestAnswer = (gameName) => {
  switch (gameName) {
    case 'even': return evenFuncs.questAnswer();
    case 'calc': return calcFuncs.questAnswer();
    case 'gcd': return gcdFuncs.questAnswer();
    default: break;
  }
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameEngine = (gameName) => {
  console.log('Welcome to the Brain Games!');
  console.log(selectTopic(gameName));
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('');
  let counter = 0;
  while (counter < 3) {
    const questAnswer = selectQuestAnswer(gameName);
    const question = car(questAnswer);
    const correctAnswer = cdr(questAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
