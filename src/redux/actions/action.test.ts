
import { addTodo } from './actions';
import { uid } from '../../utils/utils';
jest.mock("moment", () => () => ({
    format: () => "Mar 26th 20"
  }))
jest.mock('../../utils/utils');

describe('Actions', () => {
    beforeEach(() => {  
        (uid as jest.Mock).mockReturnValue('abcd1234')

    });
    describe('addTodo', () => {
        it('should return a object', () => {
            const expected = {
                payload: {
                    id: 'abcd1234', 
                    item: "made a cup of tea",
                    status: "incomplete",
                    timestamp: "Mar 26th 20"
                }, 
                type: "ADD_TODO_ITEM"
            };
            expect(addTodo('made a cup of tea')).toEqual(expected)
        });
    });
}); 