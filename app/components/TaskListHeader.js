import React, { Component } from 'react';

class TaskListHeader extends Component {
  render() {
    const author = "Dustin";
		const version = {
			major: 0,
			minor: 1
		};

		return (
			<div>
				<h1>Task Manager v.{version.major}.{version.minor} by {author}</h1>
			</div>
		);
	}
}

export default TaskListHeader;
