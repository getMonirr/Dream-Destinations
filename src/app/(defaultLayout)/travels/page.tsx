import SearchBox from "@/components/Home/Hero/SearchBox";
import DrdPagination from "@/components/Home/Travel/DrdPagination";
import SingleTravelCard from "@/components/Home/Travel/SingleTravelCard";
import DrdSection from "@/components/shared/DrdSection";
import PageStarter from "@/components/shared/PageStarter";
import RootContainer from "@/components/shared/RootContainer";
import { Divider } from "antd";

const TravelsPage = () => {
  return (
    <div className="z-20">
      <PageStarter>
        <SearchBox />
      </PageStarter>
      <div className="pt-20 pb-10">
        <RootContainer>
          <DrdSection name="View Our Travel" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <SingleTravelCard key={index} />
            ))}
          </div>
        </RootContainer>
      </div>
      <Divider />
      <div className="py-8 flex items-center justify-center">
        <DrdPagination />
      </div>
    </div>
  );
};

export default TravelsPage;
