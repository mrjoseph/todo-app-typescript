import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Todo, IState, IAppProps } from './types/types';
import { uid } from './utils/utils'
import './App.css';


export const TodoComponent = (): JSX.Element => {
  const { reducer: { todos } } = useSelector((state: IState) => state)
  return (
    <ul>
      {todos.map(({ item, id }: Todo) => {
    return (
      <li key={id}>{item}</li>
    )
  })}
    </ul>
  )
};

const App = (props:IAppProps): JSX.Element => {
  const { title } = props;
  const [todo, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent): void => {
  e.preventDefault();   
  dispatch({
    type: 'ADD_TODO_ITEM',
    payload: {
      id: uid(),
      item: todo,
      timestamp: moment().format("MMM Do YY"),
      status: 'incomplete'
    }
  })
}

const handleChange = (e: React.FormEvent): void => {
  const target = e.target as HTMLTextAreaElement
  e.preventDefault();
  setValue((target.value))
 
}  
  return(
    <div className="container">
      <h1>{title}</h1>
      <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
        value={todo}
        type="text"
        className="form-control"
        id="addTodo"
        aria-describedby="addTodo"
        onChange={handleChange}
        />
      </div>
    </form>
    {TodoComponent()}
  </div>
  )
};


export default App;
