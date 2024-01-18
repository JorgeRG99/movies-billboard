import FeaturesSection from "../components/FeaturesSection";
import { HeroSection } from "../components/HeroSection";
import { RecommendedMovies } from "../components/RecommendedMovies";

export function Home() {
  return (
    <section className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <HeroSection />
      <FeaturesSection />
      <RecommendedMovies />
    </section>
  );
}
