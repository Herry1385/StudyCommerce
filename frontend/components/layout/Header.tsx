"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link href="/" className="text-2xl font-bold text-blue-600">
          StudyCommerce
        </Link>

        {/* Menu */}

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">

          <Link href="/">Home</Link>

          <Link href="/courses">Courses</Link>

          <Link href="/pricing">Pricing</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

        </nav>

        {/* Buttons */}

        <div className="hidden md:flex gap-3">

          <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50">

            Login

          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">

            Get Started

          </button>

        </div>

      </div>
    </header>
  );
}