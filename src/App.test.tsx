import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IAppProps, IState } from './types/types';
import { uid } from './utils/utils';
import App from './App';

jest.mock('./utils/utils');
jest.mock("moment", () => () => ({
  format: () => "Mar 26th 20"
}))

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch, // NOTE: Must be a function that returns a mock
  useSelector: jest.fn()
    .mockReturnValue({
      reducer: {
        todos: [{
          id: '12345',
          item: 'hello world',
          timestamp: '26 march 2020',
          status: 'incomplete',
      }]
      }
    })
}));
const setState = () => jest.fn();
const props: IAppProps = {
  title: 'My Typescript App'
}

describe('App', () => {
  describe('render', () => {
    it('renders learn react link', () => {
      const { getByText } = render(<App {...props} />);
      const linkElement = getByText(/My Typescript App/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe('on submit', () => {
    beforeEach(() => {  
      (uid as jest.Mock).mockReturnValue('abcd1234')
      const useStateMock: any = () => ['made a cup of tea', setState];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);
  });

    it('should handle submit', () => {
      const mockPreventDefault = jest.fn();
      const event = { preventDefault: mockPreventDefault }
      const action = {
        payload: {
            id: 'abcd1234', 
            item: "made a cup of tea",
            status: "incomplete",
            timestamp: "Mar 26th 20"
        }, 
        type: "ADD_TODO_ITEM"
    };
      const { getByTestId } = render(<App {...props} />);
      const form = getByTestId('todo-form');
      fireEvent.submit(form, event);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });
  describe('on change', () => {
    it('should update the state', () => {
      const mockSetState = jest.fn()
      const useStateMock: any = () => ['made a cup of tea', mockSetState];
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);
      const { getByTestId } = render(<App {...props} />);
      const input = getByTestId('todo-input');
      const event = { target: { value: '123'} }
      fireEvent.change(input, event);
      expect(mockSetState).toHaveBeenCalledWith('123');
    });
  });
});
