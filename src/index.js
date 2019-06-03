import readlineSync from 'readline-sync';

const welcomeFunc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
};

const evenTopic = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
};

const minRandom = 0;
const maxRandom = 100;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const ifEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  let counter = 0;
  while (counter < 3) {
    const numRandom = getRandomInt(minRandom, maxRandom);
    console.log(`Question: ${numRandom}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = (numRandom % 2 === 0) ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}'сду is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { welcomeFunc, ifEven, evenTopic };
