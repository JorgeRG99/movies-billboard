import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getFilms } from "../slices/films/filmsThunks";


export const useBillboard = () => {
    const [filter, setFilter] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilms(filter));
    }, [filter])

    return { filter, setFilter }
}
