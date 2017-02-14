import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

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
                    <TaskListItem><Link to="/detail">{item}</Link></TaskListItem>
                ))}
            </ul>
        );
    }
}

// Define CreateForm sub-component
class CreateForm extends React.Component {
    render() {
        return (
            <div>
                <h2>New Task:</h2>
                <form>
                    <input type='text' ref='item' />
                    <input type='submit' value='Add'/>
                </form>
            </div>
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
        this.state={items: ['Task item #1', 'Task item #2', 'Task item #3', 'Task item #4']}
    }

    render() {
        return (
            <div>
                <TaskListHeader />
                <TaskList items={this.state.items} />
                <Link to="/create">Create New Task</Link>
            </div>
        );
    }
}

// render TaskManagerApp component
render(
    <Router history={browserHistory}>
        <Route path="/" component={TaskManagerApp} />
        <Route path="detail" component={DetailForm} />
        <Route path="create" component={CreateForm} onLeave={confirm("Are you want to leave?")} />
    </Router>,
    document.getElementById('task_manager')
);
