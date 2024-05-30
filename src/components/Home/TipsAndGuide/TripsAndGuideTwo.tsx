import travelTripsImg from "@/asset/images/home/trips.png";
import DrdSection from "@/components/shared/DrdSection";
import RootContainer from "@/components/shared/RootContainer";
import Image from "next/image";
import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";

const TripsAndGuideTwo: React.FC = () => (
  <div className=" pb-20 pt-16">
    <DrdSection name="Trips & Guide" description="Explore the world with us" />
    <div>
      <RootContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <div>
            <Image
              src={travelTripsImg}
              alt="Travel trips and tricks"
              className="rounded-2xl"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="space-y-8 text-drd-green">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-4 mb-2">
                <TbCircleNumber1Filled className="text-drd-dark-green size-10" />
                Purchase travel insurance
              </h1>
              <p className="text-slate-400">
                Purchase travel insurance. Look, no one wants to spend money on
                travel insurance for international travel
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-4 mb-2">
                <TbCircleNumber2Filled className="text-drd-dark-green size-10" />
                Avoid travel fatigue
              </h1>
              <p className="text-slate-400">
                As you start booking your first international trip, your
                excitement may get the better of you and you may want to go all
                out
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-4 mb-2">
                <TbCircleNumber3Filled className="text-drd-dark-green size-10" />
                Be aware of free wifi spots
              </h1>
              <p className="text-slate-400">
                Research and remember which places locally have free WiFi (think
                McDonald&lsquo;s, Starbucks, etc.) Download city maps onto your
                phone so you can use them offline.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-4 mb-2">
                <TbCircleNumber4Filled className="text-drd-dark-green size-10" />
                Bring a power adapter
              </h1>
              <p className="text-slate-400">
                If you&apos;re traveling abroad, chances are the electric plug
                system is different
              </p>
            </div>
          </div>
        </div>
      </RootContainer>
    </div>
  </div>
);

export default TripsAndGuideTwo;
