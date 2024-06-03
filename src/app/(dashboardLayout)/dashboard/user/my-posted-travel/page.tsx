"use client";

import DrdDashboardTitle from "@/components/Dashboard/shared/DrdDashboardTitle";
import { useGetMyPostedTripsQuery } from "@/lib/redux/Feature/trip/tripApi";
import { ITrip } from "@/types";
import type { TableProps } from "antd";
import { Button, Table } from "antd";
import moment from "moment";
import Link from "next/link";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Sl. No.",
    dataIndex: "key",
    key: "Sl. No.",
    fixed: "left",
    width: 100,
  },
  {
    title: "Budget",
    dataIndex: "budget",
    key: "Budget",
    render: (budget: number) => {
      return <span>${budget}</span>;
    },
    width: 150,
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "Start Date",
    render: (startDate: string) => {
      return <span>{moment(startDate).format("ll")}</span>;
    },
    width: 150,
  },
  {
    title: "End Date",
    key: "End Date",
    dataIndex: "endDate",
    render: (endDate: string) => {
      return <span>{moment(endDate).format("ll")}</span>;
    },
    width: 150,
  },
  {
    title: "Destination",
    key: "Destination",
    dataIndex: "destination",
    width: 150,
  },
  {
    title: "Type",
    key: "Type",
    dataIndex: "type",
    width: 150,
  },
  {
    title: "Action",
    key: "Action",
    fixed: "right",
    width: 100,
    render: (value) => {
      console.log({ value });
      return (
        <Link href={`/travels/${value?.id}`}>
          <Button type="primary">View Details</Button>
        </Link>
      );
    },
  },
];

const MyPostedTravelPage = () => {
  const {
    data: travels,
    isLoading,
    isError,
  } = useGetMyPostedTripsQuery(undefined);

  console.log({ travels, isLoading, isError });

  // generate data from api
  const data =
    travels?.data?.length > 0 &&
    travels?.data?.map((travel: ITrip, index: number) => {
      return {
        key: index + 1,
        budget: travel?.budget,
        startDate: travel?.startDate,
        endDate: travel?.endDate,
        destination: travel?.destination,
        type: travel?.type,
        id: travel?.id,
      };
    });

  return (
    <>
      <div>
        <DrdDashboardTitle name="My Posted Travels" />
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: 1500, y: 500 }}
        />
      </div>
    </>
  );
};

export default MyPostedTravelPage;
