import { useParams } from "react-router-dom";
import { useMovieInfo } from "../hooks/useMovieInfo";
import { useFavorites } from "../hooks/useFavorites";
import { NoFavorite } from "../components/Icons/NoFavorite";
import { Favorite } from "../components/Icons/Favorite";

export default function Movie() {
  const { movieImdbId } = useParams();
  const { movieInfo } = useMovieInfo(movieImdbId);
  const { favoritesList, addToFavorites, removeFromFavorites } = useFavorites();
  const isOnFavorites = favoritesList.includes(movieImdbId);

  console.log(favoritesList);

  const toggleFavorite = () => {
    if (isOnFavorites) {
      removeFromFavorites(movieImdbId);
    } else {
      addToFavorites(movieImdbId);
    }
  };

  return (
    <>
      {movieInfo && (
        <section className="flex flex-col lg:flex-row justify-evenly items-center gap-20 py-40 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
          <div className="w-[30%] flex items-center justify-center">
            <img
              alt="Film Poster"
              className="w-[20em] overflow-hidden rounded-xl object-cover object-center"
              height="510"
              src={movieInfo.Poster}
              width="550"
            />
          </div>
          <div className="space-y-16 w-[60%]">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{movieInfo.Title}</h2>
              <div className="flex gap-4 items-center">
                <div className="bg-primary-violet py-1 rounded-full w-16">
                  <p className="text-white text-center">{movieInfo.Year}</p>
                </div>
                <div onClick={toggleFavorite} className="flex items-center">
                  {isOnFavorites ? <Favorite /> : <NoFavorite />}
                </div>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-[1.1em]">
              {movieInfo.Plot}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-primary-violet">
                  Director
                </h3>
                <p className="text-gray-300 dark:text-gray-400">
                  {movieInfo.Director}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-primary-violet">
                  Genre
                </h3>
                <p className="text-gray-300 dark:text-gray-400">
                  {movieInfo.Genre}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-primary-violet">
                  Runtime
                </h3>
                <p className="text-gray-300 dark:text-gray-400">
                  {movieInfo.Runtime}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-primary-violet">
                  Rating
                </h3>
                <p className="text-gray-300 dark:text-gray-400">
                  {movieInfo.imdbRating}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-primary-violet">
                  Cast
                </h3>
                <p className="text-gray-300 dark:text-gray-400">
                  {movieInfo.Actors}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
