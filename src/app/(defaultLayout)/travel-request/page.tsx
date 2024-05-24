"use client";

import DrdCheckBox from "@/components/Form/DrdCheckBox";
import DrdForm from "@/components/Form/DrDForm";
import DrdInput from "@/components/Form/DrdInput";
import DrdTextArea from "@/components/Form/DrdTextArea";
import SingleTravelTextDetails from "@/components/Home/Travel/SingleTravel/SingleTravelTextDetails";
import DrdSection from "@/components/shared/DrdSection";
import PageStarter from "@/components/shared/PageStarter";
import RootContainer from "@/components/shared/RootContainer";
import { Button } from "antd";
import { useSearchParams } from "next/navigation";
import { FieldValues } from "react-hook-form";

const TravelRequestPage = () => {
  const travelId = useSearchParams();
  console.log({ travelId });

  const handleTravelRequestSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="">
      <PageStarter name="Travel Request page"></PageStarter>
      <div>
        <RootContainer>
          <div>
            <DrdSection name="Travel Request" />
          </div>
          <div className="py-10 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <SingleTravelTextDetails />
              </div>
              <div className="border w-full p-8 bg-drd-light-green mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-drd-green py-10">
                  Travel Request Form
                </h1>
                <DrdForm onSubmit={handleTravelRequestSubmit}>
                  <div className="flex items-center justify-between gap-4">
                    <DrdInput name="name" label="Name" type="text" />
                    <DrdInput name="email" label="Email" type="email" />
                  </div>
                  <div>
                    <DrdTextArea name="comment" label="Comment" />
                  </div>
                  <div>
                    <DrdCheckBox
                      name="agree"
                      label="Accept Terms and Conditions"
                    />
                  </div>
                  <Button type="primary" htmlType="submit" size="large" block>
                    Submit
                  </Button>
                </DrdForm>
              </div>
            </div>
          </div>
        </RootContainer>
      </div>
    </div>
  );
};

export default TravelRequestPage;
