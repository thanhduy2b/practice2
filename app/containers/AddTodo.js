import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input
          className='todo__entry'
          placeholder='Add todo'
          ref={node => {
            input = node
          }} />
        <button className='todo__button'
          type="submit">
          Add
        </button>
      </form>
    </div>
  )
};
AddTodo = connect()(AddTodo);

export default AddTodo;
