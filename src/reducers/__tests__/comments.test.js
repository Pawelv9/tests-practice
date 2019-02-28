import commentsReducer from 'reducers';
import { SAVE_COMMENT } from 'actions/types';


it('handles actions type of SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New message'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New message'])
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type: 'Space rabbit'})

    expect(newState).toEqual([]);
});