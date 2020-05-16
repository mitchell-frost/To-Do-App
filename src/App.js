import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import Header from './Header';
import Footer from './Footer';
import todosData from './todosData'

/* function App() {
  const todoItems = todosData.map(item => <TodoItem key = {item.id} item = {item} />)
  return (
    <div className="App">      
      <Header />
      <div className="todo-list">
        {todoItems}
      </div>     
    </div>
  );
} */

class App extends React.Component {
  render() {
    const todoItems = todosData.map(item => <TodoItem key = {item.id} item = {item} />)
    return (
    <div className="App">      
      <Header />
      <div className="todo-list">
        {todoItems}
      </div>     
    </div>
    )
  }
}

export default App

