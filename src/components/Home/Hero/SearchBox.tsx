"use client";
import DrdDateRangePicker from "@/components/Form/DrdDateRangePicker";
import DrdForm from "@/components/Form/DrDForm";
import DrdInput from "@/components/Form/DrdInput";
import DrdSelect from "@/components/Form/DrdSelect";
import { Button } from "antd";
import { FaLocationDot } from "react-icons/fa6";

// adventure, leisure, business
const travelTypes = [
  { value: "adventure", label: "Adventure" },
  { value: "leisure", label: "Leisure" },
  { value: "business", label: "Business" },
];

const SearchBox = () => {
  const handleSearchTravels = (values: any) => {
    console.log(values);
  };

  return (
    <div className="bg-white bg-opacity-80 w-full mx-auto mt-4 px-10 py-6 rounded-3xl text-drd-green">
      <DrdForm onSubmit={handleSearchTravels}>
        <div className=" flex flex-col md:flex-row items-center justify-between md:gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:gap-8">
            <div className="w-full md:w-auto">
              <DrdInput
                placeholder="Search Destination"
                name="destination"
                type="text"
                label="Destination"
                prefix={<FaLocationDot color="green" />}
              />
            </div>
            <div className="w-full md:w-auto">
              <DrdDateRangePicker name="dates" label="Select Dates" />
            </div>
            <div className="w-full md:w-auto">
              <DrdSelect
                name="type"
                options={travelTypes}
                label="Travel Types"
                placeholder="Select Type"
              />
            </div>
          </div>
          <Button className="" type="primary" size="large" htmlType="submit">
            Search
          </Button>
        </div>
      </DrdForm>
    </div>
  );
};

export default SearchBox;
