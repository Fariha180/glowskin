import { ProductCard } from './ProductCard';

export function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
      {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
    </div>
  );
}
