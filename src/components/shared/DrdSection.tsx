import { ReactNode } from "react";
import RootContainer from "./RootContainer";

interface DrdSectionProps {
  children?: ReactNode;
  name: string;
  description: string;
}

const DrdSection = ({ children, name, description }: DrdSectionProps) => {
  return (
    <RootContainer>
      <div className="pt-8 pb-4">
        <h1 className="text-5xl font-bold mb-4">{name}</h1>
        <p>{description}</p>
        {children}
      </div>
    </RootContainer>
  );
};

export default DrdSection;
