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
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-[170px]">
            <FaCarSide className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Car Services</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-[170px]">
            <IoAirplane className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Air Services</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-[170px]">
            <BiSolidDirections className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Guider Services</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-[170px]">
            <MdLuggage className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Luggage</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-[170px]">
            <MdAirplaneTicket className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Air ticket</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-[170px]">
            <BsTicketPerforatedFill className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">All Ticket</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-[170px]">
            <FaBus className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Bus Services</h1>
          </div>
          <div className="border p-4 px-8 flex flex-col items-center justify-center space-y-2 min-w-[170px]">
            <SiFoodpanda className="text-5xl text-drd-dark-green" />
            <h1 className="text-drdBg">Food Services</h1>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default OurServices;
