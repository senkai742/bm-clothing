"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import navItems from "@/config/navItems";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="transition-transform duration-300 hover:scale-[1.03]">
          <Logo size={56} showText />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-zinc-900"
                    : "text-zinc-500 hover:text-black"
                }`}
              >
                {item.title}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-black transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href={`tel:${siteConfig.phones[0]}`}
            className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            <Phone size={16} />
            Call Now
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 transition hover:bg-zinc-100 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="flex flex-col p-5">

            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm transition ${
                    isActive
                      ? "bg-zinc-100 font-semibold text-black"
                      : "text-zinc-600 hover:bg-zinc-50"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}

            <Link
              href={`tel:${siteConfig.phones[0]}`}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-black py-3 text-sm font-medium text-white"
            >
              <Phone size={16} />
              Call Now
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}