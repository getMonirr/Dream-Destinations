import { ITrip } from "@/types";
import { ArrowRightOutlined, CalendarOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const SingleTravelCard = ({ travel }: { travel: ITrip }) => {
  const { destination, startDate, endDate, image } = travel;
  return (
    <div>
      <Card
        style={{ width: "100%" }}
        hoverable
        cover={
          <Image
            alt="example"
            src={
              image ||
              "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
            width={200}
            height={200}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "200px",
            }}
          />
        }
      >
        <div className="space-y-4">
          <div className="text-start text-base text-drd-green space-y-6">
            <div className="flex items-center  gap-2">
              <FaLocationDot />
              <span>Location:</span>{" "}
              <span className="font-bold">{destination}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center  gap-2">
                <CalendarOutlined />
                <span>Start Date:</span>{" "}
                <span className="font-bold">
                  {moment(startDate).format("ll")}
                </span>
              </div>
              <div className="flex items-center  gap-2">
                <CalendarOutlined />
                <span>End Date:</span>{" "}
                <span className="font-bold">
                  {moment(endDate).format("ll")}
                </span>
              </div>
            </div>
          </div>
          <div className="text-drd-green">
            <p className="text-xl font-bold">Description</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              fugiat ab accusantium alias omnis perspiciatis illum sed odit
            </p>
          </div>
        </div>
        <Link href={`/travels/${travel.id}`}>
          <Button
            key={1}
            icon={<ArrowRightOutlined />}
            size="large"
            block
            type="primary"
            className="mt-4"
          >
            Travel Details
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default SingleTravelCard;
