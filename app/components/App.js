import React from 'react';
import { Link } from 'react-router';
import TodoListHeader from './TodoListHeader';

export default function App(props) {
  return (
    <div>
      <Link to='/'>Home</Link>
      <TodoListHeader />
      {props.children}
    </div>
  );
};
