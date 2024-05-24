import Image from "next/image";

import HeroBg from "@/asset/images/home/hero.jpg";
import { Button } from "antd";
import SearchBox from "./SearchBox";

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-80px)] relative flex items-center justify-center">
      {/* black overlay  */}
      <div className="absolute top-0 left-0 w-full h-full bg-drd-dark-green  opacity-40"></div>
      <Image
        src={HeroBg}
        alt="Hero Image"
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[800px]">
        <h1 className="text-5xl font-bold">Dream Destinations</h1>
        <p className="text-xl">Your dream vacation is just a click away</p>
        <Button size="large">Explore</Button>

        {/* search box  */}
        <SearchBox />
      </div>
    </div>
  );
};

export default HeroSection;
