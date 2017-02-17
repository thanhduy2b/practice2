import React from 'react';

export default function Todo(props) {
  const { todo } = props;
  if(todo.get('isDone')) {
    return <strike>{todo.get('text')}</strike>;
  } else {
    return <span>{todo.get('text')}</span>;
  }
}
