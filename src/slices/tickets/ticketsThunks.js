import { setTickets } from "./ticketsSlice";


//El thunk es una funcion que devuelve una accion asincrona
export const buyTicket = (ticket) => {
    return async (dispatch) => {
        dispatch(setTickets({ ticket }))
    }
}