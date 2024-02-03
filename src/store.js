import { configureStore } from '@reduxjs/toolkit'
import { filmsSlice } from './slices/films/filmsSlice'
import { ticketsSlice } from './slices/tickets/ticketsSlice'

export default configureStore({
  reducer: {
    films: filmsSlice.reducer,
    tickets: ticketsSlice.reducer,
  },
})