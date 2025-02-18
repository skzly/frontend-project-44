import getRandomNum from './randomnum.js';
import checkanswer from './checkanswer.js';

const rule = 'Find the greatest common divisor of given numbers.';

const maxDivisor = (num1, num2) => {
  const min = num1 > num2 ? num2 : num1;

  let max = 1;

  for (let i = 2; i <= min; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) max = 1;
  }

  return max;
};

const getDivisor = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const question = `${num1} ${num2}`;

  const answer = maxDivisor(num1, num2);

  return [question, String(answer)];
};

const game2 = () => {
  checkanswer(rule, getDivisor);
};

export default game2;
