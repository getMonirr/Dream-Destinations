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
            //   algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
            token: {
              // Seed Token
              colorPrimary: "#00b96b",
              borderRadius: 2,

              // Alias Token
              colorBgContainer: "#f6ffed",
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
