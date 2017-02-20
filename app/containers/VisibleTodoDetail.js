import { connect } from 'react-redux';
import TodoDetail from '../components/TodoDetail';

const getTodoDetail = (todos, id) => {
  return todos.filter(t => t.id == id)[0];
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo: getTodoDetail(state.todos, ownProps.routeParams.id)
  }
};

const VisibleTodoDetail = connect(
  mapStateToProps
)(TodoDetail);

export default VisibleTodoDetail;
