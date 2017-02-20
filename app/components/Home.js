import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const Home = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Link to="/create">Create New Task</Link>
  </div>
);

export default Home;
