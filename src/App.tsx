import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Typescript ToDo List</h1>
      <form>
      <div className="form-group">
        <input type="email" className="form-control" id="addTodo" aria-describedby="addTodo" />
      </div>
    </form>
  </div>
  );
}

export default App;
