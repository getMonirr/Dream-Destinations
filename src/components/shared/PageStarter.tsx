import staterBgImage from "@/asset/images/auth/login-img.jpg";
import { ReactNode } from "react";

const PageStarter = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${staterBgImage.src}')`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={` relative flex justify-center items-center  text-drd-green min-h-[250px]`}
    >
      <div className="absolute left-0 right-0 bg-drd-dark-green opacity-80  w-full h-full"></div>
      <div className="z-30">
        <h1 className="text-4xl font-bold text-center text-drd-light-yellow">
          Travels
        </h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PageStarter;
