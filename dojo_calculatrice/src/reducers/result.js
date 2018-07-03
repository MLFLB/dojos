const result = (state = [], action) => {
  switch (action.type) {
    case 'EVAL_RESULT':
      try {
        if (action.input === "") throw new EvalError();
        const newState = [...state];
        newState.push({expr: action.input, value: eval(action.input)});
        return newState;
      } catch (e) {
        return state;
      }

    default:
      return state;
  }
};

export default result;