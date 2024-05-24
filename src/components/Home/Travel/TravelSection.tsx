import DrdSection from "@/components/shared/DrdSection";
import RootContainer from "@/components/shared/RootContainer";
import { config } from "@/config";
import { ITrip } from "@/types";
import { Button } from "antd";
import Link from "next/link";
import SingleTravelCard from "./SingleTravelCard";

const TravelSection = async () => {
  const firstTenTravel = await fetch(`${config.apiUrl}/trips?limit=10`);
  const travelData = await firstTenTravel.json();

  // console.log(travelData);

  return (
    <div className="py-8">
      <DrdSection
        name="Our Travel"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, debitis!"
        }
      >
        {/* <h1 className="text-3xl font-bold">Travel</h1> */}
      </DrdSection>
      <RootContainer>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {travelData?.data?.map((travel: ITrip) => (
            <SingleTravelCard key={travel.id} travel={travel} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/travels">
            <Button className="mt-20 min-w-80" type="primary" size="large">
              View All
            </Button>
          </Link>
        </div>
      </RootContainer>
    </div>
  );
};

export default TravelSection;
