import travelImage from "@/asset/images/auth/login-img.jpg";
import SingleTravelTextDetails from "@/components/Home/Travel/SingleTravel/SingleTravelTextDetails";
import DrdSection from "@/components/shared/DrdSection";
import PageStarter from "@/components/shared/PageStarter";
import RootContainer from "@/components/shared/RootContainer";
import { Image } from "antd";
import dynamic from "next/dynamic";
import Link from "next/link";

const TravelSteps = dynamic(
  () => import("@/components/Home/Travel/SingleTravel/TravelSteps"),
  { ssr: false }
);

const TravelRequest = dynamic(
  () => import("@/components/Home/Travel/SingleTravel/TravelRequest"),
  { ssr: false }
);

interface ITravelDetailsPageProps {
  params: {
    travelId: string;
  };
}

const TravelDetailsPage = async ({ params }: ITravelDetailsPageProps) => {
  const { travelId } = params;
  console.log(travelId);

  // const travelData = await getServerSideData(
  //   `${config.apiUrl}/trips/${travelId}`
  // );

  return (
    <div className="pb-20">
      <PageStarter name="Travel Details page"></PageStarter>
      <div className="pt-10">
        <RootContainer>
          <div className="flex items-center justify-between">
            <DrdSection name="Travel details" />
            <div>
              <Link href={`/travel-request?${1}`}>
                <TravelRequest />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-8 pb-16">
            <Image
              src={travelImage.src}
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="travel image"
            />
            <SingleTravelTextDetails />
          </div>
          <TravelSteps />
        </RootContainer>
      </div>
    </div>
  );
};

export default TravelDetailsPage;
