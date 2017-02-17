import React, { Component } from 'react';

class TodoListHeader extends Component {
  render() {
		const version = {
			major: 0,
			minor: 1
		};

		return (
			<div>
				<h1>Task Manager v.{version.major}.{version.minor}</h1>
			</div>
		);
	}
}

export default TodoListHeader;
