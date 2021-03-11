import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'jokes',
    initialState: {
        categories: undefined,
        joke: undefined,
        loading: true
    },
    reducers: {
        setCategories: (state, action) => {
            return { ...state, categories: action.payload }
        },
        setJoke: (state, action) => {
            return { ...state, joke: action.payload }
        },
        setInDeterminateProgress: (state, action) => {
            return { ...state, isLoading: action.payload }
        }
    },
});

export const { setJoke, setCategories, setInDeterminateProgress } = slice.actions;

export default slice.reducer;