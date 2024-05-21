"use client";

import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
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
    </>
  );
};

export default AllProviders;
