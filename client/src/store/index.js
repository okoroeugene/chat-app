// configureStore.js

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk'

const initialState = {};
const middleWare = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleWare))
export default store
// export default store
// store.subscribe(() => {
//     console.log(store.getState())
// })