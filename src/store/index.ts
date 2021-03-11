import { configureStore } from '@reduxjs/toolkit'
import jokesReducer from './reducers';

export default configureStore({
    reducer: {
        jokes: jokesReducer
    }
})