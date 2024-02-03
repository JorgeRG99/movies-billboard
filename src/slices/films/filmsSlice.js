import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    films: [],
    isLoading: false,
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        startLoadingFilms: (state) => {
            state.isLoading = true;
        },
        stopLoadingFilms: (state) => {
            state.isLoading = false;
        },
        setFilms: (state, action) => {
            state.films = action.payload.films
        },
    },
})

export const { startLoadingFilms, stopLoadingFilms, setFilms } = filmsSlice.actions