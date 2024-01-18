import { RECOMMENDED_MOVIES } from "../config"

export const getRecommendedMovies = async () => {
    try {
        const response = await fetch(RECOMMENDED_MOVIES)

        if (!response.ok) return "Error obteniendo peliculas recomendadas, intentelo de nuevo más tarde"

        return response.json()

    } catch (error) {
        console.log(`Error during movies fetch ${error.message}`);
    }
}