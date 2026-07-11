import ProductCard from "@/app/components/home/ProductCard";
import { products } from "@/app/data/products";

interface Props {
  products: typeof products;
}

export default function ProductGrid({
  products,
}: Props) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}

    </div>
  );
}