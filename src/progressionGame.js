import getRandomNum from './randomnum.js';
import checkanswer from './checkanswer.js';

const rule = 'What number is missing in the progression?';

const length = 10;

const getProgression = (num, difference) => {
  const progression = [num];

  for (let i = 1; i < length; i += 1) {
    progression.push(num + difference * i);
  }

  return progression;
};

const getProgressionGame = () => {
  const num = getRandomNum();
  const difference = getRandomNum();
  const cut = getRandomNum(0, length);

  const progression = getProgression(num, difference);

  const answer = progression[cut];
  progression[cut] = '..';

  const question = progression.join(' ');

  return [question, String(answer)];
};

const game3 = () => {
  checkanswer(rule, getProgressionGame);
};

export default game3;
