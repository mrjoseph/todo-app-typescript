import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent } from '@testing-library/react';
import { TodoComponent } from "../components/TodoComponent";
import { reducer } from '../redux/reducers/reducers';
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch,
    useSelector: jest.fn()
    .mockReturnValue({
      reducer: {
        todos: [
            {
                id: '12345',
                item: 'hello world',
                timestamp: '26 march 2020',
                status: 'incomplete',
            },
            {
                id: 'abcdefg',
                item: 'Make a cup of tea',
                timestamp: '26 march 2020',
                status: 'incomplete',
            }
        ]
      }
    })
}));


describe('TodoComponent',() => {
   ;
    const action = {
        type: 'REMOVE_TODO_ITEM',
        payload: '12345'
    }
    describe('items', () => {
        it('should render out a list of todos', () => {
            const { getByText, getByTestId,  } = render(<TodoComponent />)
            fireEvent.click(getByTestId('todo-item-12345'));
            expect(mockDispatch).toHaveBeenCalledWith(action);
            expect(getByText(/hello world/i)).toBeInTheDocument();
            expect(getByText(/Make a cup of tea/i)).toBeInTheDocument();   
        });

    });

    describe('Remove items', () => {
        it('should render out a list of todos', async () => {
            const { getByText, getByTestId, rerender } = render(<TodoComponent />)
            fireEvent.click(getByTestId('todo-item-12345'));
            rerender(<TodoComponent />)
            expect(getByText(/hello world/i)).not.toBeInTheDocument();
        });

    });
});

