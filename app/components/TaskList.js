import React, { Component } from 'react';
import { Link } from 'react-router';

class TaskList extends Component {
  constructor() {
    super(...arguments);
    this.state={
      taskItems:[{ id: '1', name: 'Item #1'}, { id: '2', name: 'Item #2'}, { id: '3', name: 'Item #3'}]
    };
  }

  render() {
    let items = this.state.taskItems.map((item) => (
      <li key={item.id}><Link to={"/item/" + item.id}>{item.name}</Link></li>
    ));

    return (
        <div>
          <ul>{items}</ul>
        </div>
    );
  }
}

export default TaskList;
