import React, { PropTypes } from 'react';
import Todo from './Todo';

function sumEffort(items, prop) {
	return items.reduce((a, b) => {
		return parseInt(a) + parseInt(b[prop]);
	}, 0);
}

const TodoList = ({ todos, onTodoClick }) => (
  <div>
  <ul className='todo__list'>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
  <span>Sum of efforts: {sumEffort(todos, 'effort')}</span>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    effort: PropTypes.number
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
