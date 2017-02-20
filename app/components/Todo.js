import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Todo = ({ onClick, id, completed, text }) => (
  <li
    className='todo__item'>
    <a onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      {text}
    </a>
    {" "}
    <Link to={"/todos/" + id}>See details</Link>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
