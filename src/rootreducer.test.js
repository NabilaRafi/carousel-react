
import rootReducer from './rootReducer';
const suite = 'test rootreducers';

const ActionTypes = {
    LOAD_IMAGE_SUCCESS: 'LOAD_IMAGE_SUCCESS',
    LOAD_IMAGE_FAILURE: 'LOAD_IMAGE_FAILURE',
}

describe(suite, function descRootReducerSuite() {
    test('should return initial state', function testRootReducer() {
        const expected = {data: []};
        const actual = rootReducer();
        expect(actual).toEqual(expected);
    })
    test('should handle LOAD_IMAGE_SUCCESS', () => {
        const state = rootReducer();
        const expected = {data: [{ hits: 'some image url' }] };
        const actual = rootReducer(state, {
            payload: [{hits: 'some image url'}],
            type: ActionTypes.LOAD_IMAGE_SUCCESS,
        })

        expect(actual).toEqual(expected);
        expect(actual).not.toBe(state);
    })

    test('should handle LOAD_IMAGE_FAILURE', () => {
        const state = rootReducer();
        const expected = { data: { error: 'failure'}};
        const actual = rootReducer(state, {
            payload: {error: 'failure'},
            type: ActionTypes.LOAD_IMAGE_FAILURE
        })
        expect(actual).not.toBe(state);
    })
})