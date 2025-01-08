import page from "@/app/(protected)/dashboard/page";
import { PAGE_ICONS } from "@/constants/pages";
import React from "react";
type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div
      className="flex flex-col items-start
  "
    >
      {page === "Home" && (
        <div className="flex justify-center w-full">
          <div className=" radial--gradient w-4/12 py-5 lg:py-10 flex flex-col items-center">
            <p className="text-text-secondary text-lg">Welcome Back</p>
            <h2 className="capitalise text-4xl">{slug}</h2>
          </div>
        </div>
      )}
      <span
        className="radial--gradient inline-flex py-5 lg:py-10
      pr-16
      gap-x-2 items-center"
      >
        {PAGE_ICONS[page.toUpperCase()]}
        <h2 className="font-semibold text-3xl capitalize">{page}</h2>
      </span>
    </div>
  );
};

export default MainBreadCrumb;
