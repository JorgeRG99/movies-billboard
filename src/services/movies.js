import { MOVIE, MOVIE_BILLBOARD, RECOMMENDED_MOVIES } from "../config"

export const getRecommendedMovies = async () => {
    try {
        const response = await fetch(RECOMMENDED_MOVIES)

        if (!response.ok) return "Error obteniendo peliculas recomendadas, intentelo de nuevo más tarde"

        return response.json()

    } catch (error) {
        console.log(`Error during movies fetch ${error.message}`);
    }
}

export const getBillboard = async (page) => {
    try {
        const response = await fetch(MOVIE_BILLBOARD + page)
        if (!response.ok) return "Error obteniendo cartelera de peliculas, intentelo de nuevo más tarde"

        return response.json()
    } catch (error) {
        console.log(`Error during movies fetch ${error.message}`);
    }
}
export const getMovie = async (movieImdbId) => {
    try {
        const response = await fetch(MOVIE + movieImdbId)
        if (!response.ok) return "Error obteniendo informacion de la pelicula, intentelo de nuevo más tarde"

        return response.json()
    } catch (error) {
        console.log(`Error during movie info fetch ${error.message}`);
    }
}