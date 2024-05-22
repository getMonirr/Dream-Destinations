import { ReactNode } from "react";

const RootContainer = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default RootContainer;
