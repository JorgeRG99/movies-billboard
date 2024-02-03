import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tickets: [],
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState: initialState,
    reducers: {
        setTickets: (state, action) => {
            state.tickets = [...state.tickets, action.payload.ticket]
        },
    },
})

export const { setTickets } = ticketsSlice.actions