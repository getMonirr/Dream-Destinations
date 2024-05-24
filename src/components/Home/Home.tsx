import dynamic from "next/dynamic";
import Footer from "./Footer/Footer";
import HeroSection from "./Hero/HeroSection";
import TipsAndGuide from "./TipsAndGuide/TipsAndGuide";
import FeaturedDestination from "./Travel/FeaturedDestination";
import TravelSection from "./Travel/TravelSection";

const Navbar = dynamic(() => import("./Navbar/Navbar"), { ssr: false });

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
