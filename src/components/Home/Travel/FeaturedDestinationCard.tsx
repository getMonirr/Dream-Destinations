import { ITrip } from "@/types";
import Link from "next/link";

const url =
  "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png";

const FeaturedDestinationCard = ({
  index,
  travel,
}: {
  index: number;
  travel: ITrip;
}) => {
  return (
    // <Card
    //   hoverable
    //   style={{ width: "100%" }}
    //   cover={
    //     <Image
    //       alt="example"
    //       src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    //       width={100}
    //       height={100}
    //     />
    //   }
    // >
    //   <Meta title="Europe Street beat" description="www.instagram.com" />
    // </Card>
    <Link href={`/travels/${travel?.id}`}>
      <div
        style={{
          backgroundImage: `url(${travel?.image || url})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        className={`min-h-[500px] bg-drd-green h-full p-8 rounded-3xl text-white ${
          index % 2 == 0 ? "mt-16" : ""
        }`}
      >
        <p className="flex items-center justify-between gap-4 text-xl">
          Paris <span className="font-bold text-3xl">0{index}</span>
        </p>
      </div>
    </Link>
  );
};

export default FeaturedDestinationCard;
