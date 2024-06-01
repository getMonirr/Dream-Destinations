"use client";

import carAnimation from "@/asset/animation/car.json";
import Lottie from "lottie-react";
import { cn } from "./cn";

const DrdLoader = ({ className }: { className?: string }) => {
  return (
    // <Player
    //   autoplay
    //   loop
    //   src={carAnimation}
    //   className={`bg-drd-light-green w-full h-screen`}
    // ></Player>

    <Lottie
      animationData={carAnimation}
      loop
      className={cn(`bg-drd-light-green w-full h-screen`, className)}
    />
  );
};

export default DrdLoader;
