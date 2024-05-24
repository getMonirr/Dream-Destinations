"use client";

import DrdSection from "@/components/shared/DrdSection";
import { Steps } from "antd";
import { useState } from "react";

const TravelSteps = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const description = "This is a description.";
  return (
    <div>
      <DrdSection name="Travel steps" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Steps
          current={current}
          onChange={onChange}
          direction="vertical"
          items={[
            {
              title: "Step 1",
              description,
            },
            {
              title: "Step 2",
              description,
            },
            {
              title: "Step 3",
              description,
            },
          ]}
        />
        <div>
          <p className="text-xl">
            <h1>Steps: {current}</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            magni, aut aperiam consectetur ut vitae harum dicta fugiat fugit
            repellat porro quod omnis voluptates a iste, temporibus,
            necessitatibus hic. Eius?
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelSteps;
