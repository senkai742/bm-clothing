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

export default function ProductCarousel({ products, categoryTitle }: ProductCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isScrollable, setIsScrollable] = useState(false);

    // Check if the container actually has overflow content to scroll through
    useEffect(() => {
        const checkScrollable = () => {
            if (scrollContainerRef.current) {
                const { scrollWidth, clientWidth } = scrollContainerRef.current;
                // Add a small threshold buffer to ensure pixel rendering edge cases don't mismatch
                setIsScrollable(scrollWidth > clientWidth + 5);
            }
        };

        // Run initial check once mounted
        checkScrollable();

        // Re-calculate if the user resizes their browser window
        window.addEventListener("resize", checkScrollable);
        return () => window.removeEventListener("resize", checkScrollable);
    }, [products]);

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

    // Auto Scroll Logic (Only fires if content overflows screen boundaries)
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || !isScrollable) return;

        let autoScrollInterval = setInterval(() => {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollBy({ left: 240, behavior: "smooth" });
            }
        }, 4000);

        return () => clearInterval(autoScrollInterval);
    }, [products, isScrollable]);

    return (
        <div className="relative group/carousel">
            {/* Navigation Controls - Conditionally rendered using state */}
            {isScrollable && (
                <>
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
                </>
            )}

            {/* Main Track Frame */}
            <div
                ref={scrollContainerRef}
                className="flex w-full gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-[100%] min-[400px]:w-[200px] sm:w-[220px] md:w-[260px] shrink-0 snap-start"
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