import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search_panel';
import TodoList from '../to-do-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.css';

export default class App extends Component{

  maxId =100;

  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ], 
    term: '',
    filter: 'all'
  };

  createTodoItem (label) {
    return {
      label,
      important: false,
      done: false, 
      id: this.maxId++
    }
  }

deleteItem = (id) => {

  this.setState(( {todoData} )=>{
    const idx = todoData.findIndex((el) => el.id === id);

    const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

    return {
      todoData: newArr
    };
  });

};

  addItem = (text) => {
    
    const newItem = this.createTodoItem(text);

    this.setState(({todoData}) => {

      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      };
    })
    
  }

toggleProperty(arr, id, propName) {
  const idx = arr.findIndex((el) => el.id === id);

  const oldItem = arr[idx];
  const newItem = {...oldItem, 
    [propName]: !oldItem[propName]};

  return [
    ...arr.slice(0, idx),
    newItem, 
    ...arr.slice(idx + 1)
  ];

}

onToggleImportant = (id) => {
  this.setState(({ todoData }) =>{
    
    return {
      todoData: this.toggleProperty(todoData, id, 'important' )
    };
  });
};

onToggleDone = (id) => {

  this.setState(({ todoData }) =>{
    
    return {
      todoData: this.toggleProperty(todoData, id, 'done' )
    };
  });
};

onSearchChange = (term) => {
  this.setState({ term });
};

onFilterChange = (filter) => {
  this.setState({ filter });
};

search(items, term){
  if (term.length === 0){
    return items; 
  }

  return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    });
}

filter(items, filter) {
  switch(filter){
    case 'all':
      return items;
    case 'active':
      return items.filter((item) => !item.done);
    case 'done':
      return items.filter((item) => item.done);
    default: 
      return items;
  }
}

render() {

  const {todoData, term, filter} = this.state;

  const visibleItems = this.filter(this.search(todoData, term), filter);
 

  const doneCount = todoData.filter((el) => el.done).length;

  const todoCount = todoData.length -doneCount;

  return (
    <div className="todo-app">
      <AppHeader toDo = {todoCount} done = {doneCount} />
      <SearchPanel onSearchChange={ this.onSearchChange }/>
      <ItemStatusFilter filter={filter}
      onFilterChange={this.onFilterChange} />
      <TodoList 
      todos={ visibleItems }
      onDeleted={ this.deleteItem }
      onToggleImportant={ this.onToggleImportant }
      onToggleDone={ this.onToggleDone }/>
      <ItemAddForm 
      addItem ={this.addItem}/>
    </div>
      );
  } 
};
