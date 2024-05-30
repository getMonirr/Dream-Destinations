"use client";

import DashboardCard from "@/components/Dashboard/DashboardHome/DashboardCard";
import DrdDashboardTitle from "@/components/Dashboard/shared/DrdDashboardTitle";
import { Divider, Progress } from "antd";
import { FaLuggageCart } from "react-icons/fa";
import { FaDownload, FaTicket, FaUser } from "react-icons/fa6";

const iconList = [
  {
    icon: FaDownload,
    title: "Download",
    number: 10,
  },
  {
    icon: FaUser,
    title: "Users",
    number: 100,
  },
  {
    icon: FaLuggageCart,
    title: "Packages",
    number: 10,
  },
  {
    icon: FaTicket,
    title: "Tickets",
    number: 100,
  },
];

const DefaultDashboard = () => {
  return (
    <>
      <DrdDashboardTitle name="Welcome Dream Destination Dashboard" />
      <div className="bg-drd-light-green ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-8 px-4">
          {iconList.map((icon, index) => (
            <DashboardCard
              key={index}
              icon={icon.icon}
              title={icon.title}
              number={icon.number}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8 px-4">
          <div className="bg-white p-8">
            <div>
              <h1 className="text-2xl font-bold">Travel Statistics</h1>
            </div>
            <Divider />
            table
          </div>
          <div className="bg-white p-8">
            <div>
              <h1 className="text-2xl font-bold">User Statistics</h1>
            </div>
            <Divider />
            <div className="w-full flex items-center justify-between flex-wrap gap-10">
              <Progress
                type="circle"
                percent={75}
                format={(percent) => `Users`}
                strokeColor="#3a643b"
              />
              <Progress
                s
                type="circle"
                percent={80}
                format={(percent) => `Admins`}
              />
              <Progress type="circle" percent={100} format={() => "Reaching"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultDashboard;
