import { useRecommendedMovies } from "../hooks/useRecommendedMovies";
import { Card, CardContent } from "../shadcn/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn/components/carousel";

export function RecommendedMovies() {
  const { recommendedMoviesList } = useRecommendedMovies();

  console.log(recommendedMoviesList);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[60%]"
    >
      <CarouselContent>
        {recommendedMoviesList?.map((movie) => (
          <CarouselItem
            key={movie["#IMDB_ID"]}
            className="md:basis-1/2 lg:basis-1/3 h-[22em]"
          >
            <Card className="h-full border-0">
              <CardContent className="flex aspect-square items-start justify-center p-0 h-full w-full overflow-hidden rounded-xl">
                <img
                  src={movie["#IMG_POSTER"]}
                  alt={`${movie["#AKA"]} movie poster`}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-primary-violet border-0 transition hover:opacity-40 duration-300 ease-in-out" />
      <CarouselNext className="bg-primary-violet border-0 transition hover:opacity-40 duration-300 ease-in-out" />
    </Carousel>
  );
}
