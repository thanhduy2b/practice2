import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let TodoForm = ({ dispatch }) => {
  let _name;
  let _hours;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!_name.value.trim()) {
          return;
        }

        dispatch(addTodo(_name.value, _hours.value));
        _name.value = '';
        _hours.value = '';
      }}>
      <div>
        Name:
        {" "}
        <input
          className='todo__entry'
          placeholder='Name'
          ref={node => {
            _name = node
          }} />
      </div>
      <div>
        Efforts:
        {" "}
        <input
          type="number"
          className='todo__entry'
          placeholder='Hours'
          ref={node => {
            _hours = node
          }} />
      </div>
        <button className='todo__button'
          type="submit">
          Save
        </button>
      </form>
    </div>
  )
};
TodoForm = connect()(TodoForm);

export default TodoForm;
