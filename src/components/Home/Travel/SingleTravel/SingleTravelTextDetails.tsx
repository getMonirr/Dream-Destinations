import { CalendarOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const SingleTravelTextDetails = () => {
  return (
    <div className="border h-full">
      <div className="bg-drd-light-yellow p-8 text-drd-green">
        <div className="grid grid-cols-2">
          <div>
            <p className="flex items-center gap-4 text-xl font-bold ">
              <CalendarOutlined />
              Start One
            </p>
            <p className="flex items-center gap-4 text-xl font-bold ">
              <CalendarOutlined />
              End One
            </p>
          </div>
          <div className="text-xl">
            <p>2021-09-01</p>
            <p>2021-09-01</p>
          </div>
        </div>
      </div>
      <div className="p-8 pb-4 grid grid-cols-2">
        <p className="flex items-center gap-4 text-xl font-bold ">
          <CalendarOutlined />
          Destination
        </p>
        <p className="text-xl">Destination One</p>
      </div>

      <Divider />
      <div className="p-8 pb-4 grid grid-cols-2">
        <p className="flex items-center gap-4 text-xl font-bold ">
          <CalendarOutlined />
          Description
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam magni,
          aut aperiam consectetur ut vitae harum dicta fugiat fugit repellat
          porro quod omnis voluptates a iste, temporibus, necessitatibus hic.
          Eius?
        </p>
      </div>
    </div>
  );
};

export default SingleTravelTextDetails;
