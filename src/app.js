import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

//import DetailForm from './components/detail.js';
//import CreateForm from './components/create.js';

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

// Define CreateForm sub-component
class CreateForm extends React.Component {
    render() {
        return (
            <div>This is the create form.</div>
        );
    }
}

// Define DetailForm sub-component
class DetailForm extends React.Component {
    render() {
        return (
            <div>This is the detail form.</div>
        );
    }
}

// Define TaskManagerApp component (container)
class TaskManagerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: ['Task item #1', 'Task item #2', 'Task item #3', 'Task item #4']}
    }

    render() {
        return (
            <div>
                <TaskListHeader />
                <TaskList items={this.state.items} />
            </div>
        );
    }
}

// render TaskManagerApp component
render(
    <Router history = {browserHistory}>
        <Route path = "/" component = {TaskManagerApp}>
            <Route path = "detail" component = {DetailForm} />
        </Route>
        <Route path = "create" component = {CreateForm} />
    </Router>,
    document.getElementById('task_manager')
);