import { getBillboard } from "../../services/movies";
import { setFilms, startLoadingFilms, stopLoadingFilms } from "./filmsSlice";


//El thunk es una funcion que devuelve una accion asincrona
export const getFilms = (filter) => {
    return async (dispatch) => {
        dispatch(startLoadingFilms())

        let films = []

        if (filter) {
            const responsePage1 = await getBillboard(1, filter)
            if (responsePage1.Search) {
                const responsePage2 = await getBillboard(2, filter)
                const responsePage3 = await getBillboard(3, filter)

                films = [...responsePage1.Search, ...responsePage2.Search, ...responsePage3.Search]
            }

            dispatch(setFilms({ films: films }))
            dispatch(stopLoadingFilms())
            return
        }

        const responsePage1 = await getBillboard(1)
        const responsePage2 = await getBillboard(2)
        const responsePage3 = await getBillboard(3)

        films = [...responsePage1.Search, ...responsePage2.Search, ...responsePage3.Search]

        dispatch(setFilms({ films: films }))
        dispatch(stopLoadingFilms())
    }
}