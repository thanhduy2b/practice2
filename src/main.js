import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// Define TaskListHeader sub-component
class TaskListHeader extends React.Component {
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

// Define TaskListItem sub-component
class TaskListItem extends React.Component {
    render() {
        return (
            <li>{this.props.children}</li>
        );
    }
}

// Define TaskList sub-component
class TaskList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => 
                (
                    <TaskListItem>{item}</TaskListItem>
                ))}
            </ul>
        );
    }
}

// Define TaskFooter sub-component
class TaskFooter extends React.Component {
    render() {
        return (
            <a>Link</a>
        );
    }
}

// Define TaskManagerApp component (container)
class TaskManagerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: ['Task item #1', 'Task item #2', 'Task item #3']}
    }

    render() {
        return (
            <div>
                <TaskListHeader />
                <TaskList items={this.state.items} />
                <TaskFooter />
            </div>
        );
    }
}

// render TaskManagerApp component
render(
	<TaskManagerApp />,
    document.getElementById('task_manager')
);