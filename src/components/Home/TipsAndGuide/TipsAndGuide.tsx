import DrdSection from "@/components/shared/DrdSection";
import RootContainer from "@/components/shared/RootContainer";
import { FaFlagCheckered } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";

const TipsAndGuide = () => {
  return (
    <div className="pb-20">
      <DrdSection
        name="Tips and Guide"
        description="We provide the best travel experience for you. We have a wide range of travel destinations that you can choose from. We have a team of professionals who will guide you through your travel journey"
      />
      <RootContainer>
        <div className="flex items-center justify-between gap-8">
          <div className="py-10 px-6 flex items-center justify-center border w-full">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <FaCircleCheck className="text-6xl" />
              </div>
              <h1 className="text-xl font-bold mt-4">
                Choose Your Destination
              </h1>
              <p>
                Here are some of the best travel destinations that you can
                choose. We have a wide range of travel destinations that you can
                choose from. We have a team of professionals who will guide you
                through your travel journey
              </p>
            </div>
          </div>
          <div className="py-10 px-6 flex items-center justify-center border w-full">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <RiInformation2Fill className="text-6xl" />
              </div>
              <h1 className="text-xl font-bold mt-4">Request a travel</h1>
              <p>
                Travel request is a feature that allows you to request a travel,
                and we will get back to you with the best travel experience. We
                have a wide range of travel destinations that you can choose
                from. We have a team of professionals who will guide you through
                your travel journey
              </p>
            </div>
          </div>
          <div className="py-10 px-6 flex items-center justify-center border w-full">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <FaFlagCheckered className="text-6xl" />
              </div>
              <h1 className="text-xl font-bold mt-4">
                Enjoy Your Dream Destination
              </h1>
              <p>
                Enjoy your dream destination with us. We provide the best travel
                experience for you. We have a wide range of travel destinations
                that you can choose from. We have a team of professionals who
                will guide you through your travel journey
              </p>
            </div>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default TipsAndGuide;
