import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/constants/site";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

export default function Logo({
  showText = true,
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className}`}
      aria-label={siteConfig.name}
    >
      {/* Logo Icon */}

      <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
        {/* SVG आने के बाद इसे Enable करेंगे */}

        {false ? (
          <Image
            src="/logo/logo.svg"
            alt={siteConfig.name}
            fill
            priority
          />
        ) : (
          <span className="text-white text-xl font-bold">
            SC
          </span>
        )}
      </div>

      {showText && (
        <div className="leading-tight">
          <h1 className="text-xl font-bold text-slate-900">
            {siteConfig.name}
          </h1>

          <p className="text-xs text-slate-500">
            Learn Commerce with AI
          </p>
        </div>
      )}
    </Link>
  );
}