import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App, { TodoComponent } from './App';
import { IAppProps, IState } from './types/types';

jest.mock("react-redux", () => ({
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
const props: IAppProps = {
  title: 'My Typescript App'
}

describe('App', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App {...props} />);
    const linkElement = getByText(/Typescript ToDo List/i);
    expect(linkElement).toBeInTheDocument();
  });
});


describe('TodoComponent',() => {
  it('should render out a list of todos', () => {
    const { getByText } = render(<TodoComponent />);
    expect(getByText(/hello world/i)).toBeInTheDocument();
  });
});