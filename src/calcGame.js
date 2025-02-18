import getOperation from './operations.js';
import getRandomNum from './randomnum.js';
import checkanswer from './checkanswer.js';

const rule = 'What is the result of the expression?';

const getCalc = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const operations = ['+', '-', '*'];

  const operation = operations[getRandomNum(0, operations.length)];

  const question = `${num1} ${operation} ${num2}`;
  const answer = getOperation(num1, num2, operation);

  return [question, answer];
};

const gamecalc = () => {
  checkanswer(rule, getCalc);
};

export default gamecalc;
