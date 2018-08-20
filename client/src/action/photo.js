import * as types from './index';

export const NewPhoto = (content) => dispatch => {
    dispatch({ type: types.NEW_PHOTO_REQUEST })
    debugger;
    fetch(types.BASE_URL + '/api/newphoto', {
        method: 'POST',
        headers: 'application/json',
        body: JSON.stringify(content)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: types.NEW_PHOTO_SUCCESS,
            payload: data
        }))
        .catch(err => dispatch({
            type: types.NEW_PHOTO_FAILURE,
            message: err
        }))
}

export const FetchPhoto = () => dispatch => {
    dispatch({ type: types.FETCH_PHOTO_START })
    fetch(types.BASE_URL + '')
        .then(res => res.json)
        .then(data => dispatch({
            type: types.FETCH_PHOTO_SUCCESS,
            payload: data
        }))
        .catch(err => dispatch({
            type: types.FETCH_PHOTO_FAILURE,
            message: err
        }))
}