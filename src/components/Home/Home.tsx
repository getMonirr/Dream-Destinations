import CTASection from "./CTA/CTASection";
import Footer from "./Footer/Footer";
import HeroSection from "./Hero/HeroSection";
import Header from "./Navbar/Header";
import OurServices from "./OurServices/OurServices";
import DrdStats from "./Stats/DrdStats";
import TripsAndGuideTwo from "./TipsAndGuide/TripsAndGuideTwo";
import FeaturedDestination from "./Travel/FeaturedDestination";
import TravelSection from "./Travel/TravelSection";

// const Navbar = dynamic(() => import("./Navbar/Navbar"), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurServices />
      <TravelSection />
      <FeaturedDestination />
      <CTASection />
      <TripsAndGuideTwo />
      <DrdStats />
      <Footer />
    </div>
  );
};

export default HomePage;
