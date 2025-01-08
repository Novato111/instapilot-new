import Loader from "@/components/global/loader";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader state>..loading</Loader>
    </div>
  );
};

export default loading;
