export const pressKey = key => ({
  type: 'PRESS_KEY',
  key
});

export const evalResult = input => ({
  type: 'EVAL_RESULT',
  input
});