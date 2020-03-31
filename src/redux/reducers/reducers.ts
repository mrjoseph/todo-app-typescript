import { Reducer, Action } from "redux";
import { TodoState, Todo } from '../../types/types';
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM ,EDIT_TODO_ITEM } from '../actions/actions';

export interface AddToDoAction {
    type: 'ADD_TODO_ITEM'
    payload: Todo
}
export interface EditToDoAction {
    type: 'EDIT_TODO_ITEM'
    payload: string
}
export interface RemoveToDoAction {
    type: 'REMOVE_TODO_ITEM'
    payload: string
}

export type TodoActionTypes = 
AddToDoAction |
EditToDoAction |
RemoveToDoAction;

export const initalState: TodoState = {
    todos:[]
}


export const reducer:Reducer<TodoState, Action> = (state = initalState, action: TodoActionTypes | any) => {
    switch(action.type) {
        case ADD_TODO_ITEM:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO_ITEM:
            const { todos } = state;
            const newState = todos.filter((item: Todo) => item.id !== action.payload  && item)
            return { 
                ...state,
                todos: newState
            }
            default:
                return state
    }
}