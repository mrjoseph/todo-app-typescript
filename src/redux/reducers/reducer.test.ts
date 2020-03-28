import { TodoState, Todo } from '../../types/types';
import { ADD_TODO_ITEM, REMOVE_TODO_ITEM ,EDIT_TODO_ITEM } from '../actions/actions';
import { reducer, initalState } from './reducers';

describe('reducer', () => {
    it('initial state should be a empty array ', () => {
        expect(initalState).toEqual({"todos": []});
    });

    it('should return new state with todo added', () => {
        const action : any = {
            type: ADD_TODO_ITEM,
            payload: {
                id: '12345',
                item: 'hello world',
                timestamp: '26 march 2020',
                status: 'incomplete',
            }
        }
        const expected = {
            todos: [{
                id: '12345',
                item: 'hello world',
                timestamp: '26 march 2020',
                status: 'incomplete',
            }]
        }
        expect(reducer(initalState, action)).toEqual(expected);
    });

    it('should return new state unchanged', () => {
        const action : any = {
            type: EDIT_TODO_ITEM,
        }
        const expected = {
            todos: []
        }
        expect(reducer(initalState, action)).toEqual(expected);
    });
});