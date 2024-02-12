import { useEffect, useState } from "react"

export const useFavorites = () => {
    const [favoritesList, setFavoritesList] = useState([])

    useEffect(() => {
        const localFavorites = localStorage.getItem("favorites")

        if (localFavorites) setFavoritesList(JSON.parse(localFavorites))
    }, [])

    const addToFavorites = (movie) => {
        const newFavoritesList = [...favoritesList, movie]
        setFavoritesList(newFavoritesList)
        localStorage.setItem("favorites", JSON.stringify(newFavoritesList))
    }

    const removeFromFavorites = (movieToRemove) => {
        const newFavoritesList = favoritesList.filter((movie) => movie.imdbID !== movieToRemove.imdbID);
        setFavoritesList(newFavoritesList);
        localStorage.setItem("favorites", JSON.stringify(newFavoritesList));
    };

    return { favoritesList, addToFavorites, removeFromFavorites }
}
