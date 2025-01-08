"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquareMore, Menu, X } from "lucide-react";

import { MobileNav } from "./mobile-navbar";
import { NavLinks } from "./Navlinks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquareMore className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">DMGenius</span>
          </div>

          <NavLinks className="hidden md:flex" />

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Button size="sm">Start Free</Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
