"use client";

import { useRef, useEffect, useState } from "react";
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

export default function ProductCarousel({
  products,
  categoryTitle,
}: ProductCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      const container = scrollContainerRef.current;

      if (!container) return;

      setIsScrollable(container.scrollWidth > container.clientWidth + 5);
    };

    checkScrollable();

    window.addEventListener("resize", checkScrollable);

    return () => window.removeEventListener("resize", checkScrollable);
  }, [products]);

  const getScrollAmount = () => {
    const container = scrollContainerRef.current;

    if (!container) return 0;

    const card = container.querySelector(
      "[data-card]"
    ) as HTMLDivElement | null;

    return card ? card.offsetWidth + 12 : container.clientWidth;
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -getScrollAmount() : getScrollAmount(),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container || !isScrollable) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: getScrollAmount(),
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [products, isScrollable]);

  return (
    <div className="relative">
      {isScrollable && (
        <>
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-[34%] z-30 -translate-y-1/2 rounded-full border border-zinc-200 bg-white/95 p-2 text-zinc-600 shadow transition hover:bg-white hover:text-black active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-[34%] z-30 -translate-y-1/2 rounded-full border border-zinc-200 bg-white/95 p-2 text-zinc-600 shadow transition hover:bg-white hover:text-black active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div
        ref={scrollContainerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-4 scrollbar-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            data-card
            className="
              w-[72%]
              min-[360px]:w-[68%]
              min-[390px]:w-[64%]
              sm:w-[220px]
              md:w-[250px]
              shrink-0
              snap-start
            "
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