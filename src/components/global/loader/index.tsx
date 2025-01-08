import { cn } from "@/lib/utils";
import React from "react";
import { Spinner } from "./spinner";

type Props = {
  state: boolean;
  classname?: string;
  children: React.ReactNode;
  color?: string;
};

const Loader = ({ state, classname, children, color }: Props) => {
  return state ? (
    <div className={cn(classname)}>
      <Spinner color={color}></Spinner>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
