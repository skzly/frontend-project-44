import readlineSync from 'readline-sync';
import readline from './cli.js';

const count = 3;

const checkanswer = (rule, makegame) => {
  console.log('Welcome to the Brain Games!');
  const name = readline();

  console.log(rule);
  let correct = 0;

  while (correct < count) {
    const [question, answer] = makegame();

    console.log(`Question: ${question}`);
    const useranswer = readlineSync.question('Your answer:');

    if (String(answer) === useranswer) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(useranswer, 'is wrong answer ;(. Correct answer was', answer);
      console.log(`Let's try again,${name}!`);

      return;
    }
  }

  if (correct === count) {
    console.log(`Congratulations,${name}!`);
  }
};

export default checkanswer;
