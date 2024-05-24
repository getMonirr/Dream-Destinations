import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";

const FeaturedDestinationCard = () => {
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={
        <Image
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          width={100}
          height={100}
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default FeaturedDestinationCard;
