import { TodoState, Todo } from '../types/types';
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM ,EDIT_TODO_ITEM } from '../actions/actions';

interface AddToDoAction {
    type: 'ADD_TODO_ITEM'
    payload: Todo
}
interface EditToDoAction {
    type: 'EDIT_TODO_ITEM'
    payload: string
}
interface RemoveToDoAction {
    type: 'REMOVE_TODO_ITEM'
}

export type TodoActionTypes = 
AddToDoAction |
EditToDoAction |
RemoveToDoAction;

export const initalState: TodoState = {
    todos:[]
}

export const reducer = (state = initalState, action: TodoActionTypes): TodoState => {
    switch(action.type) {
        case ADD_TODO_ITEM:
            return {
                
                todos: [...state.todos, action.payload]
            }
            default:
                return state
    }
}