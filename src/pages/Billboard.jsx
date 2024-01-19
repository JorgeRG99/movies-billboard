import { Link } from "react-router-dom";
import { BillboardSearchbar } from "../components/BillboardSearchbar";
import BillboardSkeleton from "../components/BillboardSkeleton";
import { MovieCard } from "../components/MovieCard";
import { useBillboard } from "../hooks/useBillboard";
import { NoTitles } from "../components/NoTitles";

export function Billboard() {
  const { billboardList, isLoading, setFilter } = useBillboard();

  console.log(billboardList);

  return (
    <section className="pb-40 pt-28 px-28 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <BillboardSearchbar setFilter={setFilter} />
      {isLoading ? (
        <BillboardSkeleton />
      ) : (
        <>
          {billboardList.length > 0 ? (
            <ul className="grid grid-cols-billboard gap-8">
              {billboardList?.map((movie) => (
                <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
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
            <NoTitles />
          )}
        </>
      )}
    </section>
  );
}
