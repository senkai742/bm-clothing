"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/app/components/home/ProductCard";

interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
  categoryTitle: string;
}

export default function ProductCarousel({ products, categoryTitle }: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Manual Navigation Actions
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Optional: Auto Scroll Loop Logic (Replaces the broken CSS keyframe track)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let autoScrollInterval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" }); // Reset loop to start safely
      } else {
        container.scrollBy({ left: 240, behavior: "smooth" });
      }
    }, 4000); // Transitions automatically every 4 seconds

    return () => clearInterval(autoScrollInterval);
  }, [products]);

  return (
    <div className="relative group/carousel">
      {/* Navigation Controls */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm transition hover:bg-zinc-50 active:scale-95 md:left-4 cursor-pointer"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5 cursor-pointer" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm transition hover:bg-zinc-50 active:scale-95 md:right-4 cursor-pointer"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5 cursor-pointer" />
      </button>

      {/* Main Track Frame */}
      <div
        ref={scrollContainerRef}
        className="flex w-full gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[180px] sm:w-[220px] md:w-[260px] shrink-0 snap-start"
          >
            <ProductCard
              id={product.id}
              name={product.name}
              category={categoryTitle}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}