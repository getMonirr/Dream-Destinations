"use client";

import SearchBox from "@/components/Home/Hero/SearchBox";
import DrdPagination from "@/components/Home/Travel/DrdPagination";
import SingleTravelCard from "@/components/Home/Travel/SingleTravelCard";
import DrdSection from "@/components/shared/DrdSection";
import PageStarter from "@/components/shared/PageStarter";
import RootContainer from "@/components/shared/RootContainer";
import { travelPaginationPerPage } from "@/constant/paginationControl";
import { useGetTripQuery } from "@/lib/redux/Feature/trip/tripApi";
import { selectTripQueries, setPage } from "@/lib/redux/Feature/trip/tripSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import { ITrip } from "@/types";
import { Divider } from "antd";

const TravelsPage = () => {
  const tripQueries = useAppSelector(selectTripQueries);

  const { data: travels, isLoading, isError } = useGetTripQuery(tripQueries);

  console.log({ travels, isLoading, isError });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="z-20">
      <PageStarter name="All Travels">
        <SearchBox />
      </PageStarter>
      <div className="pt-20 pb-10">
        <RootContainer>
          <DrdSection name="View Our Travel" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {travels?.data?.length > 0 ? (
              travels?.data?.map((travel: ITrip) => (
                <SingleTravelCard key={travel.id} travel={travel} />
              ))
            ) : (
              <div className="text-center">No travel found</div>
            )}
          </div>
        </RootContainer>
      </div>
      <Divider />
      <div className="py-8 flex items-center justify-center">
        <DrdPagination
          metaData={travels?.meta}
          setPage={setPage}
          paginationPerPage={travelPaginationPerPage}
        />
      </div>
    </div>
  );
};

export default TravelsPage;
