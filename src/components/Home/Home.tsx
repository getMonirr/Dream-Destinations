import Footer from "./Footer/Footer";
import HeroSection from "./Hero/HeroSection";
import Navbar from "./Navbar/Navbar";
import TipsAndGuide from "./TipsAndGuide/TipsAndGuide";
import FeaturedDestination from "./Travel/FeaturedDestination";
import TravelSection from "./Travel/TravelSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TravelSection />
      <FeaturedDestination />
      <TipsAndGuide />
      <Footer />
    </div>
  );
};

export default HomePage;
