import * as types from '../action/index';

const initialState = {
    isLoading: false,
    content: '',
    errorMsg: ''
}
export default function photoReducer(state = initialState, action) {
    switch (action.type) {
        case types.NEW_PHOTO_REQUEST:
            return Object.assign({}, state, {
                isLoading: true,
            })
        case types.NEW_PHOTO_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                content: action.payload
            })
        case types.NEW_PHOTO_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                errorMsg: action.payload
            })
        case types.FETCH_PHOTO_START:
            return Object.assign({}, state, {
                isLoading: true,
            })
        case types.FETCH_PHOTO_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                content: action.payload
            })
        case types.FETCH_PHOTO_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                errorMsg: action.payload
            })
        default:
            return state;
    }
}