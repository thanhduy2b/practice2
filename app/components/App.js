import React from 'react'
import TodoListHeader from './TodoListHeader'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <TodoListHeader />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
