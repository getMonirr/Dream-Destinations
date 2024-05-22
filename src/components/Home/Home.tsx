import HeroSection from "./Hero/HeroSection";
import Navbar from "./Navbar/Navbar";
import TravelSection from "./Travel/TravelSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TravelSection />
    </div>
  );
};

export default HomePage;
