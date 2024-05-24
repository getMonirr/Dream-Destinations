import staterBgImage from "@/asset/images/pages/starter-bg-image.jpg";
import { ReactNode } from "react";

const PageStarter = ({
  children,
  name,
}: {
  children?: ReactNode;
  name: string;
}) => {
  return (
    <div
      style={{
        backgroundImage: `url('${staterBgImage.src}')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={` relative flex justify-center items-center  text-drd-green min-h-[500px]`}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        className="absolute left-0 right-0 w-full h-full"
      ></div>
      <div className="z-30">
        <h1 className="text-4xl font-bold text-center text-drd-light-yellow">
          {name}
        </h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PageStarter;
