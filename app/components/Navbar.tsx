// src/components/shared/Navbar.tsx

"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import navItems  from "@/config/navItems";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-zinc-900"
        >
          <span className="text-zinc-500">BM </span>
          Clothing
        </Link>


        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                text-sm font-medium text-zinc-700
                transition-colors
                hover:text-black
              "
            >
              {item.title}
            </Link>
          ))}
        </nav>


        {/* Desktop Action */}

        <div className="hidden md:flex">

          <Link
            href={`tel:${siteConfig.phones[0]}`}
            className="
              flex items-center gap-2
              rounded-full
              bg-black
              px-5 py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-zinc-800
            "
          >
            <Phone size={16} />
            Call Now
          </Link>

        </div>


        {/* Mobile Menu Button */}

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="
            rounded-md
            p-2
            text-zinc-800
            transition
            hover:bg-zinc-100
            md:hidden
          "
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>


      {/* Mobile Navigation */}

      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">

          <nav className="flex flex-col px-6 py-5">

            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  py-3
                  text-sm
                  font-medium
                  text-zinc-700
                  transition
                  hover:text-black
                "
              >
                {item.title}
              </Link>
            ))}


            <Link
              href={`tel:${siteConfig.phones[0]}`}
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-black
                px-5
                py-3
                text-sm
                font-semibold
                text-white
              "
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