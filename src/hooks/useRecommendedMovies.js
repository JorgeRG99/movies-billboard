import { useEffect, useState } from "react"
import { getRecommendedMovies } from "../services/movies"

export const useRecommendedMovies = () => {
    const [recommendedMoviesList, setRecommendedMoviesList] = useState(null)

    useEffect(() => {
        const fetchReccomendedMoviesList = async () => {
            const response = await getRecommendedMovies()

            setRecommendedMoviesList(response.Search)
        }

        fetchReccomendedMoviesList()
    }, [])

    return { recommendedMoviesList }
}
