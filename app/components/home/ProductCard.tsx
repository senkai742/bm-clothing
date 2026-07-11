import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string | number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="group flex w-full flex-col bg-white"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-50 rounded-sm">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-w-640px) 50vw, (max-w-768px) 25vw, 16vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="pt-3 pb-1">
        <p className="mb-0.5 text-[10px] uppercase tracking-widest text-zinc-400">
          {category}
        </p>

        <h3 className="line-clamp-1 text-sm font-medium tracking-tight text-zinc-800 group-hover:text-black transition-colors">
          {name}
        </h3>

        <p className="mt-1 text-sm font-semibold text-zinc-950">
          ৳{price.toLocaleString("en-BD")}
        </p>
      </div>
    </Link>
  );
}