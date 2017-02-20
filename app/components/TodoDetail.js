import React, { PropTypes } from 'react';

const TodoDetail = ({ todo }) => (
  <div>
    <div>Name: {todo.text}</div>
    <div>Effort(hours): {todo.effort}</div>
    <div>Status: {todo.completed ? 'Completed' : 'Active'}</div>
  </div>
);

TodoDetail.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    effort: PropTypes.number
  }).isRequired
};

export default TodoDetail;
