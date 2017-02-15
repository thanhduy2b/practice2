import React, { Component } from 'react';
import { Link } from 'react-router';

import TaskList from './TaskList';

class Home extends Component {
    render() {
        return (
          <div>
            <TaskList />
            <Link to="/create">Create New Task</Link>
          </div>
        );
    }
}

export default Home;
