"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navigation } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export default function MobileMenu() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}

      <button
        className="lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}

            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              className="fixed right-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl"
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b p-5">

                <h2 className="text-lg font-bold">
                  Menu
                </h2>

                <button onClick={() => setOpen(false)}>
                  <X size={24} />
                </button>

              </div>

              {/* Navigation */}

              <div className="flex flex-col p-6 gap-2">

                {navigation.map((item) => {

                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 font-medium transition-all",
                        active
                          ? "bg-blue-600 text-white"
                          : "hover:bg-slate-100"
                      )}
                    >
                      {item.title}
                    </Link>
                  );

                })}

              </div>

              {/* Footer */}

              <div className="absolute bottom-0 w-full border-t p-6 space-y-3">

                <Button
                  variant="outline"
                  className="w-full"
                >
                  Login
                </Button>

                <Button
                  className="w-full"
                >
                  Get Started
                </Button>

              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}