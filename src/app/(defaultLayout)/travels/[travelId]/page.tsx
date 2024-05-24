import travelImage from "@/asset/images/auth/login-img.jpg";
import DrdSection from "@/components/shared/DrdSection";
import PageStarter from "@/components/shared/PageStarter";
import RootContainer from "@/components/shared/RootContainer";
import { CalendarOutlined } from "@ant-design/icons";
import { Divider, Image } from "antd";
import dynamic from "next/dynamic";

const TravelSteps = dynamic(
  () => import("@/components/Home/Travel/SingleTravel/TravelSteps"),
  { ssr: false }
);

const TravelDetailsPage = () => {
  return (
    <div className="pb-20">
      <PageStarter name="Travel Details page"></PageStarter>
      <div className="pt-10">
        <RootContainer>
          <DrdSection name="Travel details" />
          <div className="grid grid-cols-1 md:grid-cols-2 pt-8 pb-16">
            <Image
              src={travelImage.src}
              style={{
                width: "100%",
                height: "100%",
              }}
              alt="travel image"
            />
            <div className="border">
              <div className="bg-drd-light-yellow p-8 text-drd-green">
                <div className="grid grid-cols-2">
                  <div>
                    <p className="flex items-center gap-4 text-xl font-bold ">
                      <CalendarOutlined />
                      Start One
                    </p>
                    <p className="flex items-center gap-4 text-xl font-bold ">
                      <CalendarOutlined />
                      End One
                    </p>
                  </div>
                  <div className="text-xl">
                    <p>2021-09-01</p>
                    <p>2021-09-01</p>
                  </div>
                </div>
              </div>
              <div className="p-8 pb-4 grid grid-cols-2">
                <p className="flex items-center gap-4 text-xl font-bold ">
                  <CalendarOutlined />
                  Destination
                </p>
                <p className="text-xl">Destination One</p>
              </div>

              <Divider />
              <div className="p-8 pb-4 grid grid-cols-2">
                <p className="flex items-center gap-4 text-xl font-bold ">
                  <CalendarOutlined />
                  Description
                </p>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam magni, aut aperiam consectetur ut vitae harum dicta
                  fugiat fugit repellat porro quod omnis voluptates a iste,
                  temporibus, necessitatibus hic. Eius?
                </p>
              </div>
            </div>
          </div>
          <TravelSteps />
        </RootContainer>
      </div>
    </div>
  );
};

export default TravelDetailsPage;
