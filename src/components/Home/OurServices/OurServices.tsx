import DrdSection from "@/components/shared/DrdSection";
import RootContainer from "@/components/shared/RootContainer";
import { BiSolidDirections } from "react-icons/bi";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { MdAirplaneTicket, MdLuggage } from "react-icons/md";
import { SiFoodpanda } from "react-icons/si";

const OurServices = () => {
  return (
    <div className="pb-16">
      <DrdSection
        name="Our Services"
        description="We offer the best services"
      />
      <RootContainer>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-full md:min-w-[170px] shadow-xl hover:shadow-none rounded-sm">
            <FaCarSide className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Car Services</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-full md:min-w-[170px] shadow-xl hover:shadow-none rounded-sm">
            <IoAirplane className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Air Services</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-full md:min-w-[170px] shadow-xl hover:shadow-none rounded-sm">
            <BiSolidDirections className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Guider Services</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-full md:min-w-[170px] shadow-xl hover:shadow-none rounded-sm">
            <MdLuggage className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Luggage</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-full md:min-w-[170px] shadow-xl hover:shadow-none rounded-sm">
            <MdAirplaneTicket className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Air ticket</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-full md:min-w-[170px] shadow-xl hover:shadow-none rounded-sm">
            <BsTicketPerforatedFill className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">All Ticket</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-full md:min-w-[170px] shadow-xl hover:shadow-none rounded-sm">
            <FaBus className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Bus Services</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-full md:min-w-[170px] shadow-xl hover:shadow-none rounded-sm">
            <SiFoodpanda className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Food Services</h1>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default OurServices;
