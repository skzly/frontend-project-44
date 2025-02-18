const getOperation = (num1, num2, operation) => {
  let answer;
  switch (operation) {
    case '+': answer = num1 + num2;
      break;

    case '-': answer = num1 - num2;
      break;

    case '*': answer = num1 * num2;
      break;

    default: return 'unknown operator';
  }

  return answer;
};

export default getOperation;
