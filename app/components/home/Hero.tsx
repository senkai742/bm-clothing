import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-50">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-stone-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Left */}

        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
            Premium Clothing Collection
          </span>

          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-zinc-900 lg:text-6xl">
            {siteConfig.hero.title}
          </h1>

          <p className="max-w-lg text-lg leading-8 text-zinc-600">
            {siteConfig.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 font-medium text-white transition hover:bg-zinc-800"
            >
              Browse Collection

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href={`tel:${siteConfig.phones[0]}`}
              className="inline-flex items-center rounded-full border-2 border-black bg-white px-7 py-3.5 font-medium text-black transition hover:bg-black hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid max-w-lg grid-cols-3 gap-6 border-t border-stone-300 pt-8">
            <div>
              <h3 className="font-semibold text-zinc-900">
                Quality
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Trusted Products
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900">
                Collection
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Latest Fashion
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900">
                Service
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Wholesale & Retail
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="BM Clothing Collection"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Floating Card */}

          <div className="absolute bottom-8 left-8 rounded-2xl bg-white px-6 py-4 shadow-xl">
            <p className="text-sm text-zinc-500">
              Explore
            </p>

            <h3 className="text-lg font-semibold text-zinc-900">
              New Arrivals
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}