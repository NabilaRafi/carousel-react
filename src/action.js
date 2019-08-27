import axios from 'axios';

const ActionTypes = {
    LOAD_IMAGE_SUCCESS: 'LOAD_IMAGE_SUCCESS',
    LOAD_IMAGE_FAILURE: 'LOAD_IMAGE_FAILURE',
}

export const loadImageSuccess = (response) => {
    if(response !==null) {
        return {
            type: ActionTypes.LOAD_IMAGE_SUCCESS,
            payload: response,
        };
    }

    return {
        type: ActionTypes.LOAD_IMAGE_FAILURE,
        payload: {
            error: response,
        },
    };
};

export const loadImageFailure = (error) => ({
    type: ActionTypes.LOAD_IMAGE_FAILURE,
    payload: error,
});

export const loadImage = () => (dispatch) => {
    axios({
        method: 'post',
        url: 'https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo',
        headers: {'content-type': 'application/json'},
    })
    .then((response) => dispatch(loadImageSuccess(response.data)))
    .catch((error) => dispatch(loadImageFailure(error)));
}