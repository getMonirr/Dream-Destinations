// import Image from "next/image";

import HeroBg from "@/asset/images/home/hero.jpg";
import RootContainer from "@/components/shared/RootContainer";
import { ShareAltOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import SearchBox from "./SearchBox";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[calc(100vh-80px)] relative flex items-center justify-center"
    >
      {/* black overlay  */}
      <div className="absolute top-0 left-0 w-full h-full bg-drd-dark-green  opacity-40"></div>
      {/* <Image
        src={HeroBg}
        alt="Hero Image"
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
        }}
      /> */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white max-w-[900px]"> */}
      <div className=" z-30">
        <RootContainer>
          <div className=" text-white max-w-[900px] w-full text-center">
            <h1 className="text-5xl font-bold ">Dream Destinations</h1>
            <p className="text-xl py-5">
              Your dream vacation is just a click away
            </p>
            <Link href="/dashboard/user/post-travel">
              <Button
                size="large"
                className="my-10 w-80 font-bold"
                icon={<ShareAltOutlined />}
                style={{
                  fontWeight: "bold",
                }}
              >
                Share Your Trip
              </Button>
            </Link>

            {/* search box  */}
            <SearchBox />
          </div>
        </RootContainer>
      </div>
    </div>
  );
};

export default HeroSection;
