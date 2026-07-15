"use client";

import { useEffect, useState } from "react";

import Logo from "@/components/ui/Logo";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Logo />

        {/* Desktop Navigation */}

        <Navbar />

        {/* Right Side */}

        <div className="flex items-center gap-3">

          <div className="hidden lg:flex items-center gap-3">

            <Button
              variant="ghost"
            >
              Login
            </Button>

            <Button>
              Get Started
            </Button>

          </div>

          {/* Mobile */}

          <MobileMenu />

        </div>

      </div>
    </header>
  );
}