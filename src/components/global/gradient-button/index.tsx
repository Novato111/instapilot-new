import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: "BUTTON" | "LINK";
  href?: string;
  className?: string;
  onClick?: () => void; // Optional for button actions
};

const GradientButton = ({
  children,
  type,
  className = "",
  href,
  onClick,
}: Props) => {
  const gradients =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-[2px]";

  switch (type) {
    case "BUTTON":
      return (
        <div className={gradients}>
          <Button className={cn(className, "rounded-xl")} onClick={onClick}>
            {children}
          </Button>
        </div>
      );

    case "LINK":
      if (!href) {
        console.error("`href` is required for type 'LINK'");
        return null;
      }
      return (
        <div className={gradients}>
          <Link href={href} className={cn(className, "rounded-xl")}>
            {children}
          </Link>
        </div>
      );

    default:
      return null;
  }
};

export default GradientButton;
