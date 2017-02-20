import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import todoApp from './reducers';
import App from './components/App';
import Home from './components/Home';
import TodoDetail from './components/TodoDetail';
import TodoForm from './components/TodoForm';

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/todos/:id" component={TodoDetail} />
        <Route path="create" component={TodoForm} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
