"use client";

import { Breadcrumb } from "antd";

const DrdBreadcrumb = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />
    </>
  );
};

export default DrdBreadcrumb;
