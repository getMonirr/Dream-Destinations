"use client";

import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import StoreProvider from "./Store-Provider";

const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StoreProvider>
        <ConfigProvider
          theme={{
            // algorithm: [theme.darkAlgorithm],
            token: {
              // Seed Token
              // colorPrimary: "#C80000", // red
              colorPrimary: "#3A643B", // green
              // colorPrimary: "#FDE723", // yellow

              // colorTextSecondary: "#FFFFFF",
              // colorFillSecondary: "#FFFFFF",
              // colorText: "#FFFFFF",
              // colorFill: "#FFFFFF",
              // colorPrimaryText: "#15151F",
              // colorPrimaryBg: "#FFFFFF",
              // borderRadius: 2,
              // colorTextBase: "Black",

              // colorPrimaryHover: "#FDE723",

              // Alias Token
              // colorBgContainer: "#6D6D6D",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </StoreProvider>
    </>
  );
};

export default AllProviders;
