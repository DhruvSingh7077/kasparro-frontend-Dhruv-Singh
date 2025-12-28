"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type ActivePage = "home" | "platform" | "about" | "architecture";

interface MarketingNavbarProps {
  activePage?: ActivePage;
}

export function MarketingNavbar({ activePage }: MarketingNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center pt-6 px-4">
      <div className="max-w-6xl w-full mx-auto rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-3 shadow-sm flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">K</span>
          </div>
          <span className="text-sm text-zinc-500 hidden sm:inline">
            kasparro.io
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-700">
          <Link
            href="/"
            className={`transition-colors hover:text-black ${
              activePage === "home" ? "text-black font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/platform"
            className={`transition-colors hover:text-black ${
              activePage === "platform" ? "text-black font-semibold" : ""
            }`}
          >
            Platform
          </Link>
          <Link
            href="/about"
            className={`transition-colors hover:text-black ${
              activePage === "about" ? "text-black font-semibold" : ""
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right side (desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            asChild
            className="rounded-full bg-black hover:bg-zinc-800 text-sm"
          >
            <Link href="/app/dashboard">Start Free Audit</Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-black hover:bg-zinc-800 text-xs px-3 py-1"
          >
            <Link href="/app/dashboard">Audit</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden mt-2 w-full max-w-6xl mx-auto px-4">
          <div className="rounded-2xl border border-zinc-200 bg-white shadow-md py-2">
            <nav className="flex flex-col text-sm font-medium text-zinc-700">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`px-4 py-2 hover:bg-zinc-50 ${
                  activePage === "home" ? "text-black font-semibold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/platform"
                onClick={() => setOpen(false)}
                className={`px-4 py-2 hover:bg-zinc-50 ${
                  activePage === "platform" ? "text-black font-semibold" : ""
                }`}
              >
                Platform
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={`px-4 py-2 hover:bg-zinc-50 ${
                  activePage === "about" ? "text-black font-semibold" : ""
                }`}
              >
                About
              </Link>
             
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
