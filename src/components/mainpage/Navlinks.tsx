"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#templates", label: "Templates" },
  { href: "#resources", label: "Resources" },
];

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

export function NavLinks({ className, onClick }: NavLinksProps) {
  return (
    <div className={cn("gap-6", className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
