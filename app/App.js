import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoListHeader from './components/TodoListHeader';
import TodoListContainer from './containers/TodoListContainer';
import todoReducer from './todoReducer';

const todoStore = createStore(todoReducer);

render(
  <div>
    <TodoListHeader />
    <Provider store={todoStore}>
      <TodoListContainer />
    </Provider>
  </div>,
  document.getElementById('app')
);
