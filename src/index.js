import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsCount = 3;

export default (gameTask, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log('');
  for (let i = 1; i <= roundsCount; i += 1) {
    const pairQuestionAnswer = getQuestionAnswer();
    const question = car(pairQuestionAnswer);
    const correctAnswer = cdr(pairQuestionAnswer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
