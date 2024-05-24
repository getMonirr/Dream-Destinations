"use client";

import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
              // colorBgContainer: "#E6F4E0",
            },
          }}
        >
          {children}
          <ToastContainer />
        </ConfigProvider>
      </StoreProvider>
    </>
  );
};

export default AllProviders;
