import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search_panel';
import TodoList from '../to-do-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

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

export default App;