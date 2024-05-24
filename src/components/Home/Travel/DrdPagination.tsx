"use client";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Pagination } from "antd";

const itemRender = (_: any, type: string, originalElement: any) => {
  if (type === "prev") {
    return (
      <Button icon={<LeftOutlined />} iconPosition="start">
        Previous
      </Button>
    );
  }
  if (type === "next") {
    return (
      <Button icon={<RightOutlined />} iconPosition="end">
        Next
      </Button>
    );
  }
  return originalElement;
};

const DrdPagination = () => {
  return (
    <Pagination
      defaultCurrent={1}
      total={12}
      pageSize={5}
      // onChange={handlePagination}
      itemRender={itemRender}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      hideOnSinglePage
    />
  );
};

export default DrdPagination;
