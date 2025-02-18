import getRandomNum from './randomnum.js';
import checkanswer from './checkanswer.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const answer1 = () => {
  const num = getRandomNum();
  const answer = getPrime(num) ? 'yes' : 'no';

  return [num, answer];
};

const primeGame1 = () => {
  checkanswer(rule, answer1);
};

export default primeGame1;
