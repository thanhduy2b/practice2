let nextTodoId = 1;

export const addTodo = (text, effort=0) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    effort
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
