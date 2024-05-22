import Image from "next/image";

import HeroBg from "@/asset/images/home/hero.jpg";
import { Button, DatePicker, Input, Select } from "antd";
import { FaLocationDot } from "react-icons/fa6";

const { RangePicker } = DatePicker;

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-80px)] relative flex items-center justify-center">
      {/* black overlay  */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
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
        <button className="bg-drdPrimary text-white px-6 py-2 mt-4 rounded-md">
          Explore
        </button>

        {/* search box  */}
        <div className="bg-white bg-opacity-80 w-full mx-auto mt-4 px-10 py-6 rounded-3xl">
          <div className="flex items-end justify-center gap-8">
            <div className="space-y-4">
              <h3 className="text-black">Destination</h3>
              <Input
                size="large"
                prefix={<FaLocationDot />}
                placeholder="Search Destination"
                style={{ backgroundColor: "GrayText" }}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-black">Start Dates</h3>
              <DatePicker
                size="large"
                style={{ backgroundColor: "GrayText" }}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-black">Travel Types</h3>
              <Select
                defaultValue="lucy"
                size="large"
                style={{ width: 200 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </div>
            <div>
              <Button className="" type="primary" size="large">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
