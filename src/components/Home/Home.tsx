import Footer from "./Footer/Footer";
import HeroSection from "./Hero/HeroSection";
import Header from "./Navbar/Header";
import TipsAndGuide from "./TipsAndGuide/TipsAndGuide";
import FeaturedDestination from "./Travel/FeaturedDestination";
import TravelSection from "./Travel/TravelSection";

// const Navbar = dynamic(() => import("./Navbar/Navbar"), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TravelSection />
      <FeaturedDestination />
      <TipsAndGuide />
      <Footer />
    </div>
  );
};

export default HomePage;
