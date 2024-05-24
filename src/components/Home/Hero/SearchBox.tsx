import { Button, DatePicker, Input, Select } from "antd";
import { FaLocationDot } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div className="bg-white bg-opacity-80 w-full mx-auto mt-4 px-10 py-6 rounded-3xl">
      <div className="flex items-end justify-center gap-8">
        <div className="space-y-4">
          <h3 className="text-black">Destination</h3>
          <Input
            size="large"
            prefix={<FaLocationDot />}
            placeholder="Search Destination"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-black">Start Dates</h3>
          <DatePicker size="large" />
        </div>
        <div className="space-y-4">
          <h3 className="text-black">Travel Types</h3>
          <Select
            defaultValue="lucy"
            size="large"
            style={{ width: 200 }}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>
        <div>
          <Button className="" type="primary" size="large">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
