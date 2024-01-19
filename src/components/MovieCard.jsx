export function MovieCard({ movie }) {
  return (
    <div className="flex flex-col gap-3 items-center cursor-pointer">
      <img src={movie.Poster} className="rounded-xl" />
      <h2 className="text-white font-semibold">{movie.Title}</h2>
      <div className="bg-primary-violet px-4 py-1 rounded-full">
        <h2 className="text-white text-[.8em] font-medium">{movie.Year}</h2>
      </div>
    </div>
  );
}
