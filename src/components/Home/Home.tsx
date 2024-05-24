import HeroSection from "./Hero/HeroSection";
import Navbar from "./Navbar/Navbar";
import FeaturedDestination from "./Travel/FeaturedDestination";
import TravelSection from "./Travel/TravelSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TravelSection />
      <FeaturedDestination />
    </div>
  );
};

export default HomePage;
