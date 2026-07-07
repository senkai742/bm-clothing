import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-8">

        {/* Content */}

        <div className="space-y-8">

          <div className="inline-flex items-center rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
            Premium Clothing Collection
          </div>

          <h1 className="max-w-xl text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">
            {siteConfig.hero.title}
          </h1>

          <p className="max-w-lg text-lg leading-8 text-zinc-600">
            {siteConfig.hero.subtitle}
          </p>


          <div className="flex flex-wrap gap-4">

            <Link
              href="/products"
              className="group flex items-center gap-2 rounded-full bg-black px-7 py-3.5 font-medium text-white transition hover:bg-zinc-800"
            >
              Browse Collection

              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={18}
              />
            </Link>


            <Link
              href={`tel:${siteConfig.phones[0]}`}
              className="rounded-full border border-zinc-300 px-7 py-3.5 font-medium transition hover:bg-zinc-100"
            >
              Contact Us
            </Link>

          </div>


          <div className="flex gap-8 pt-4 text-sm text-zinc-500">

            <div>
              <p className="font-semibold text-zinc-900">
                Quality
              </p>
              <p>Trusted Products</p>
            </div>

            <div>
              <p className="font-semibold text-zinc-900">
                Collection
              </p>
              <p>Latest Fashion</p>
            </div>

            <div>
              <p className="font-semibold text-zinc-900">
                Service
              </p>
              <p>Wholesale & Retail</p>
            </div>

          </div>

        </div>


        {/* Image */}

        <div className="relative">

          <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-100">

            <Image
              src="/images/hero-fashion.jpg"
              alt="BM Clothing collection"
              fill
              priority
              className="object-cover"
            />

          </div>


          {/* Floating Card */}

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">

            <p className="text-sm text-zinc-500">
              Explore
            </p>

            <p className="font-semibold text-zinc-900">
              New Arrivals
            </p>

          </div>


        </div>

      </div>
    </section>
  );
}