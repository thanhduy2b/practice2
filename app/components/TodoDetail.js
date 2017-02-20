import React, { PropTypes } from 'react';

const TodoDetail = (todo) => (
  <div>
    <span>Name: {todo.text}</span>
    <span>Effort(hours): {todo.effort}</span>
    <span>Status: {todo.completed ? 'Completed' : 'Active'}</span>
  </div>
);

TodoDetail.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    effort: PropTypes.number.isRequired
  }).isRequired
};

export default TodoDetail;
