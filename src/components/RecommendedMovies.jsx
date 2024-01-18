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

  return (
    <section className="w-full flex flex-col justify-center items-center pt-20 pb-40 gap-20">
      <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
        Recommendated premieres
      </h1>
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
    </section>
  );
}
