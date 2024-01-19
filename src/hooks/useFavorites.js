import { useEffect, useState } from "react"

export const useFavorites = () => {
    const [favoritesList, setFavoritesList] = useState([])

    useEffect(() => {
        const localFavorites = localStorage.getItem("favorites")

        if (localFavorites) setFavoritesList(JSON.parse(localFavorites))
    }, [])

    const addToFavorites = (movieImbdId) => {
        const newFavoritesList = [...favoritesList, movieImbdId]
        setFavoritesList(newFavoritesList)
        localStorage.setItem("favorites", JSON.stringify(newFavoritesList))
    }

    const removeFromFavorites = (movieImbdId) => {
        const newFavoritesList = favoritesList.filter((id) => id !== movieImbdId);
        setFavoritesList(newFavoritesList);
        localStorage.setItem("favorites", JSON.stringify(newFavoritesList));
    };

    return { favoritesList, addToFavorites, removeFromFavorites }
}
