const INITIAL_STATE = {
  idGenerator: 0,
  todos: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_A_TODO":
      state = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.idGenerator,
            title : `HI! I AM TO-DO LIST NUMBER ${state.idGenerator}`,
            list : [],
          }
        ],
        idGenerator: ++state.idGenerator
      };
      break;
    default:
      return state;
  }

  return state;
};
