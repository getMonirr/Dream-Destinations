"use client";

import { ConfigProvider, theme } from "antd";
import { ReactNode } from "react";
import StoreProvider from "./Store-Provider";

const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StoreProvider>
        <ConfigProvider
          theme={{
            algorithm: [theme.darkAlgorithm],
            token: {
              // Seed Token
              colorPrimary: "#FDE723",
              // colorTextSecondary: "#FFFFFF",
              // colorFillSecondary: "#FFFFFF",
              colorText: "#FFFFFF",
              // colorFill: "#FFFFFF",
              colorPrimaryText: "#15151F",
              // colorPrimaryBg: "#FFFFFF",
              // borderRadius: 2,
              // colorTextBase: "Black",

              // Alias Token
              colorBgContainer: "#6D6D6D",
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
