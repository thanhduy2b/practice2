import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Home from './components/Home';
import TaskList from './components/TaskList';
import TaskListHeader from './components/TaskListHeader';
import TaskDetails from './components/TaskDetails';
import CreateTaskForm from './components/CreateTaskForm';

class App extends Component {
    render() {
        return (
          <div>
            <Link to='/'>Home</Link>
            <TaskListHeader />
            {this.props.children}
          </div>
        );
    }
}

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="items" component={TaskList} />
        <Route path="/item/:id" component={TaskDetails} />
        <Route path="create" component={CreateTaskForm} />
      </Route>
    </Router>,
    document.getElementById('task_manager')
);
