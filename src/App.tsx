import React, { useState } from 'react';
import moment from 'moment';
import { ADD_TODO_ITEM } from './redux/actions/actions'
import { useDispatch } from 'react-redux';
import { IAppProps } from './types/types';
import { uid } from './utils/utils'
import './App.css';
import { TodoComponent } from './components/TodoComponent';

const App = (props:IAppProps): JSX.Element => {
  const { title } = props;
  const [todo, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e:any): void => {
  e.preventDefault();   

  dispatch({
    type: ADD_TODO_ITEM,
    payload: {
      id: uid(),
      item: todo,
      timestamp: moment().format("MMM Do YY"),
      status: 'incomplete'
    }
  })
  setValue('');
}

const handleChange = (e: React.FormEvent): void => {
  const target = e.target as HTMLTextAreaElement
  e.preventDefault();
  setValue(target.value)
}  
  return(
    <div className="container">
      <h1>{title}</h1>
      <form className="form" data-testid="todo-form" onSubmit={(e) => handleSubmit(e)} >
      <div className="form-group">
        <input
        value={todo}
        autoComplete="off"
        type="text"
        className="form-control"
        id="addTodo"
        aria-describedby="addTodo"
        onChange={handleChange}
        data-testid="todo-input"
        />
      </div>
    </form>
    {TodoComponent()}
  </div>
  )
};


export default App;
