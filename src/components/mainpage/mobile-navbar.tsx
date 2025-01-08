"use client";

import { Button } from "@/components/ui/button";
import { NavLinks } from "./Navlinks";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 top-16 p-6 bg-background border-b md:hidden">
      <NavLinks
        className="flex flex-col space-y-4 mb-6"
        onClick={() => setIsOpen(false)}
      />
      <div className="flex flex-col gap-2">
        <Button variant="ghost" className="w-full justify-start">
          Sign in
        </Button>
        <Button className="w-full justify-start">Start Free</Button>
      </div>
    </div>
  );
}
