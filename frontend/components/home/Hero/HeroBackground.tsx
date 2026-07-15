import { ReactNode } from "react";

interface HeroBackgroundProps {
  children: ReactNode;
}

export default function HeroBackground({
  children,
}: HeroBackgroundProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Top Left Blur */}

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

      {/* Top Right Blur */}

      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

      {/* Bottom Left */}

      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      {/* Bottom Right */}

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}

      <div className="relative z-10">

        {children}

      </div>

    </section>
  );
}