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
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, debitis!"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                iste, veritatis numquam rerum dignissimos laborum culpa ut,
                officia facilis distinctio blanditiis? Possimus ratione ab
                suscipit vitae deserunt provident explicabo recusandae?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                iste, veritatis numquam rerum dignissimos laborum culpa ut,
                officia facilis distinctio blanditiis? Possimus ratione ab
                suscipit vitae deserunt provident explicabo recusandae?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                iste, veritatis numquam rerum dignissimos laborum culpa ut,
                officia facilis distinctio blanditiis? Possimus ratione ab
                suscipit vitae deserunt provident explicabo recusandae?
              </p>
            </div>
          </div>
        </div>
      </RootContainer>
    </div>
  );
};

export default TipsAndGuide;
