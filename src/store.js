import { configureStore } from '@reduxjs/toolkit'
import { filmsSlice } from './slices/films/filmsSlice'

export default configureStore({
  reducer: {
    films: filmsSlice.reducer,
  },
})