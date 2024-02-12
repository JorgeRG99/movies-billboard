import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";
import { MovieCard } from "../components/MovieCard";
import { WEB_ROUTES } from "../config";

export default function Favorites() {
  const { favoritesList } = useFavorites();

  return (
    <section className="px-28 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex-col justify-evenly items-center flex-1 overflow-auto gap-20 py-40  text-white">
      <>
        {favoritesList.length > 0 ? (
          <ul className="grid grid-cols-billboard gap-8">
            {favoritesList?.map((movie) => (
              <Link key={movie.imdbID} to={`/design/movie/${movie.imdbID}`}>
                <li
                  key={movie.imdbID}
                  className="rounded-xl w-full h-auto flex items-center justify-center"
                >
                  <MovieCard movie={movie} />
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="text-center text-white py-24 flex flex-col gap-4">
            <h2 className="text-lg font-bold">
              You don&apos;t have any favorites
            </h2>

            <Link
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary-violet px-8 text-sm font-medium text-white shadow hover:opacity-70 duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              to={WEB_ROUTES.billboard}
            >
              GO SEE OUR FILMS
            </Link>
          </div>
        )}
      </>
    </section>
  );
}
