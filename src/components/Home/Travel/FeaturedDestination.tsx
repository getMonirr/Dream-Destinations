import DrdSection from "@/components/shared/DrdSection";
import RootContainer from "@/components/shared/RootContainer";
import { config } from "@/config";
import { ITrip } from "@/types";
import FeaturedDestinationCard from "./FeaturedDestinationCard";

const FeaturedDestination = async () => {
  const firstTenTravel = await fetch(`${config.apiUrl}/trips?limit=8`, {
    next: {
      revalidate: 30,
    },
  });
  const travelData = await firstTenTravel.json();
  return (
    <div className="py-8">
      <DrdSection
        name="Find out most popular destinations"
        description="We provide the best travel experience for you. We have a wide range of travel destinations that you can choose from. We have a team of professionals who will guide you through your travel journey"
      >
        {/* <h1 className="text-3xl font-bold">Featured Destinations</h1> */}
      </DrdSection>
      <RootContainer>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {travelData?.data?.map((travel: ITrip, idx: number) => (
            <FeaturedDestinationCard
              key={idx}
              index={idx + 1}
              travel={travel}
            />
          ))}
        </div>
      </RootContainer>
    </div>
  );
};

export default FeaturedDestination;
