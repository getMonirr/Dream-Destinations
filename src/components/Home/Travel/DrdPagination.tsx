"use client";

import { paginationPerPage } from "@/constant/paginationControle";
import { setPage } from "@/lib/redux/Feature/trip/tripSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
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

interface IProps {
  metaData: {
    total: number;
    limit: number;
    page: number;
  };
}

const DrdPagination = ({ metaData }: IProps) => {
  const dispatch = useAppDispatch();

  const { total, limit, page } = metaData;

  console.log({ metaData });

  const handlePagination = (page: number) => {
    console.log(page);
    dispatch(setPage(page));
  };

  return (
    <Pagination
      defaultCurrent={1}
      total={total}
      pageSize={paginationPerPage}
      onChange={handlePagination}
      itemRender={itemRender}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      hideOnSinglePage
    />
  );
};

export default DrdPagination;
