"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Headphones, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-20 h-72 w-72 rounded-full bg-gradient-to-r from-zinc-200 to-transparent opacity-30 blur-3xl" />
        <div className="absolute -right-4 bottom-20 h-96 w-96 rounded-full bg-gradient-to-l from-zinc-200 to-transparent opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-8">
        {/* Content */}
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-700 px-5 py-2.5 text-sm font-medium text-white shadow-lg">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" size={16} />
            <span>Premium Clothing Collection 2025</span>
          </div>

          {/* Heading */}
          <h1 className="max-w-xl text-5xl font-extrabold tracking-tight text-zinc-900 md:text-6xl lg:text-7xl">
            {siteConfig.hero.title}
            <span className="block bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              Redefine Your Style
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-lg text-lg leading-8 text-zinc-600">
            {siteConfig.hero.subtitle} Discover exceptional quality garments crafted for comfort, durability, and timeless elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-zinc-900 px-8 py-4 font-medium text-white shadow-xl shadow-zinc-900/20 transition-all duration-300 hover:bg-zinc-800 hover:shadow-2xl hover:shadow-zinc-900/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Shop Now</span>
              <ArrowRight
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            <Link
              href={`/tel:${siteConfig.phones[0]}`}
              className="group flex items-center gap-2 rounded-full border-2 border-zinc-300 px-8 py-4 font-medium text-zinc-700 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white hover:-translate-y-0.5"
            >
              <Headphones size={18} />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-zinc-900">
                <Truck className="h-5 w-5" />
                <span className="font-semibold">Free Shipping</span>
              </div>
              <p className="text-xs text-zinc-500">On orders over $100</p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-zinc-900">
                <Sh