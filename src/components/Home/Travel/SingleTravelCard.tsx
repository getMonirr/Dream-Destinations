import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const SingleTravelCard = () => {
  return (
    <div>
      <Card
        style={{ width: "100%" }}
        hoverable
        cover={
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            width={100}
            height={100}
          />
        }
        actions={[
          <Button key={1} icon={<ArrowRightOutlined />}>
            Travel Details
          </Button>,
        ]}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <FaLocationDot />
              <span>Location</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaLocationDot />
              <span>Dates</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaLocationDot />
              <span>Dates</span>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">Description</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              fugiat ab accusantium alias omnis perspiciatis illum sed odit
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleTravelCard;
