"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  LayoutDashboard,
  FileSearch,
  Network,
  Home,
  Sparkles,
} from "lucide-react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/app/audit", label: "Audit", icon: FileSearch },
    { href: "/app/architecture", label: "Architecture", icon: Network },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Menu Button + Logo */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setSidebarOpen(true)}
              variant="ghost"
              size="icon"
              className="hover:bg-zinc-100"
            >
              <Menu className="w-5 h-5" />
            </Button>

            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">K</span>
              </div>
              <span className="font-semibold text-zinc-900 hidden sm:inline">
                Kasparro
              </span>
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-sm">
              Profile
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-full text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              New Audit
            </Button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sliding Sidebar - Instagram Style */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50
          transition-transform duration-300 ease-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">K</span>
              </div>
              <div>
                <p className="font-bold text-zinc-900">Kasparro</p>
                <p className="text-xs text-zinc-500">Dashboard</p>
              </div>
            </div>
            <Button
              onClick={() => setSidebarOpen(false)}
              variant="ghost"
              size="icon"
              className="hover:bg-zinc-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-2">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-4">
              Navigation
            </p>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-zinc-200 space-y-2">
            <Link
              href="/"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-all"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content with top padding */}
      <main className="pt-16">{children}</main>
    </div>
  );
}
