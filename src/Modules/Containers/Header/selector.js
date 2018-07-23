import { createSelector } from "reselect";

const getTodosState = state => state.header.todos;

const getTodos = createSelector(getTodosState, todos => todos);

const selectors = {
  getTodos
}

export default selectors;