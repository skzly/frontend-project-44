import getRandomNum from './randomnum.js';
import checkanswer from './checkanswer.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const startGame = () => {
  const number = getRandomNum();
  const answer = isEven(number) ? 'yes' : 'no';

  return [number, answer];
};

const gameeven = () => {
  checkanswer(rule, startGame);
};

export default gameeven;
