import React from 'react';

import './app-header.css'

const AppHeader = (toDo, done) => {
    return (
      <div className = "app-header">
        <h1>My Todo List</h1>
    <h2> 1 more to do, 3 done</h2>
      </div> 
    );
  };
  
export default AppHeader;