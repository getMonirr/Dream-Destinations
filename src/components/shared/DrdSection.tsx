import { ReactNode } from "react";
import RootContainer from "./RootContainer";

const DrdSection = ({ children }: { children: ReactNode }) => {
  return (
    <RootContainer>
      <div className="pt-8 pb-4">{children}</div>
    </RootContainer>
  );
};

export default DrdSection;
