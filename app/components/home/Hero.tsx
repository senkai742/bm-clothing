import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    // Reduced padding on mobile (py-6), and set up a neat desktop viewport framing alignment
    <section className="relative overflow-hidden bg-white lg:flex lg:items-center lg:min-h-[calc(100vh-64px)] py-6 sm:py-10 lg:py-0">
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:gap-12 w-full">
        
        {/* Left Column (Content) */}
        {/* Swapped space-y-8 to space-y-5 on mobile to keep the elements compact */}
        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Premium Clothing Collection
          </span>

          <h1 className="max-w-xl text-3xl font-normal uppercase tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl leading-[1.15]">
            {siteConfig.hero.title}
          </h1>

          <p className="max-w-md text-sm font-light leading-relaxed text-zinc-500 sm:text-lg">
            {siteConfig.hero.subtitle}
          </p>

          <div className="flex flex-col gap-3 min-[400px]:flex-row min-[400px]:gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 bg-zinc-900 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-zinc-800"
            >
              Browse Collection
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href={`tel:${siteConfig.phones[0]}`}
              className="inline-flex items-center justify-center border border-zinc-300 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-zinc-900 transition hover:bg-zinc-50"
            >
              Contact Us
            </Link>
          </div>

          {/* Brand Pillars Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-zinc-100 pt-5 sm:pt-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                Quality
              </h3>
              <p className="mt-0.5 text-[11px] text-zinc-400 font-light">
                Trusted Fabrics
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                Collection
              </h3>
              <p className="mt-0.5 text-[11px] text-zinc-400 font-light">
                Latest Designs
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                Service
              </h3>
              <p className="mt-0.5 text-[11px] text-zinc-400 font-light">
                Wholesale & Retail
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Image Showcase) */}
        {/* Adjusted mt-2 on mobile so the image sits closer to the text above it */}
        <div className="relative mt-2 lg:mt-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-50 rounded-sm">
            <Image
              src="/images/hero.png"
              alt="BM Clothing Collection"
              fill
              priority
              sizes="(max-w-768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 border border-zinc-100 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-none shadow-sm sm:bottom-6 sm:left-6">
            <p className="text-[10px] uppercase tracking-widest text-zinc-400">
              Explore
            </p>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 mt-0.5">
              New Arrivals
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}