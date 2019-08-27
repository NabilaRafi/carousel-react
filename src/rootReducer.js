const initialState = {
    data:[],
};

const ActionTypes = {
    LOAD_IMAGE_SUCCESS: 'LOAD_IMAGE_SUCCESS',
    LOAD_IMAGE_FAILURE: 'LOAD_IMAGE_FAILURE',
}

const rootReducer = (state= initialState, action={}) => {
    switch(action.type) {
        case ActionTypes.LOAD_IMAGE_SUCCESS:
            const hitsArray = action.payload.hits;
            const imageArray = hitsArray && hitsArray.map(({webformatURL}) => webformatURL);
            return {
                ...state,
                data: action.payload,
                imageArray: imageArray,
            };
        case ActionTypes.LOAD_IMAGE_FAILURE:
            return { ...state, error: action.payload};
        default:
            return state;
    }
};

export default rootReducer;