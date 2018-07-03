const defaultState = "";

const input = (state = defaultState, action) => {
  switch (action.type) {
    case 'PRESS_KEY':
      const key = action.key;
      const newString = `${state}${action.key}`;
      const regexpOperande = /(\+|-|\*|\/|\*\*)/g;
      
      switch(true) {
        case (key.match(regexpOperande) !== null):
          return (state.slice(-1).match(regexpOperande) !== null) ? state : newString ;
        default: 
          return newString;
      }
      case 'EVAL_RESULT':
        return (action.input === "") ? state : defaultState;
    default:
      return state;
  }
};

export default input;