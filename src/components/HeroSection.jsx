import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
      <img
        alt="Movie Background"
        className="absolute inset-0 object-cover w-full h-full"
        height="800"
        src="/hero-section.webp"
        width="1920"
      />
      <div className="relative h-full px-4 md:px-6 flex flex-col justify-center items-start bg-gradient-to-r from-black/60 to-transparent">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
          Welcome to Movie Billboard
        </h1>
        <p className="mt-2 text-lg md:text-xl lg:text-2xl text-gray-200 max-w-md">
          Discover a world of movies at your fingertips. This is your ultimate
          destination for cinematic experiences.
        </p>
        <Link
          className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary-violet px-8 text-sm font-medium text-white shadow hover:opacity-70 duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
}
