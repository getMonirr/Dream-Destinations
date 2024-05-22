import DrdSection from "@/components/shared/DrdSection";
import RootContainer from "@/components/shared/RootContainer";
import { Button } from "antd";
import SingleTravelCard from "./SingleTravelCard";

const TravelSection = () => {
  return (
    <div className="py-8">
      <DrdSection>
        <h1 className="text-3xl font-bold">Travel</h1>
      </DrdSection>
      <RootContainer>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {Array.from({ length: 10 }).map((_, idx) => (
            <SingleTravelCard key={idx} />
          ))}
        </div>
        <div className="text-center">
          <Button className="mt-4" type="primary" size="large">
            View All
          </Button>
        </div>
      </RootContainer>
    </div>
  );
};

export default TravelSection;
