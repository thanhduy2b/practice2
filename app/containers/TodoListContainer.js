import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import addTodo from '../actions/addTodo';
import toggleTodo from '../actions/toggleTodo';

const TodoListContainer = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(TodoList);

export default TodoListContainer
