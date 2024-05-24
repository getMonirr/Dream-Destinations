import DrdSection from "@/components/shared/DrdSection";
import RootContainer from "@/components/shared/RootContainer";
import FeaturedDestinationCard from "./FeaturedDestinationCard";

const FeaturedDestination = () => {
  return (
    <div className="py-8">
      <DrdSection>
        <h1 className="text-3xl font-bold">Featured Destinations</h1>
      </DrdSection>
      <RootContainer>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {Array.from({ length: 10 }).map((_, idx) => (
            <FeaturedDestinationCard key={idx} />
          ))}
        </div>
      </RootContainer>
    </div>
  );
};

export default FeaturedDestination;
