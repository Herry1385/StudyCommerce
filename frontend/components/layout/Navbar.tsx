"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden lg:flex items-center gap-8"
      aria-label="Main Navigation"
    >
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "relative text-sm font-medium transition-colors duration-300",
              active
                ? "text-blue-600"
                : "text-slate-600 hover:text-blue-600"
            )}
          >
            {item.title}

            {active && (
              <span className="absolute left-0 -bottom-2 h-0.5 w-full rounded-full bg-blue-600" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}