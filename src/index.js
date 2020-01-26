import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search_panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () =>{

  const todoData = [
    {label: 'Drink coffee', important: false, id: 1 },
    {label: 'Make Awesome App', important: true, id: 2 },
    {label: 'Have a lunch', important: false, id: 3 }
  ];


  return (
    <div className="todo-app">
    
      <AppHeader toDo = {1} done = {3} />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));