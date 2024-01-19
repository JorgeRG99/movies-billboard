import { useEffect, useState } from "react"
import { getMovie } from "../services/movies"

export const useMovieInfo = (movieImdbId) => {
    const [movieInfo, setMovieInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchMovieInfo = async () => {
            const response = await getMovie(movieImdbId)

            setMovieInfo(response)
            setIsLoading(false)
        }

        fetchMovieInfo()
    }, [])

    return { movieInfo, isLoading }
}