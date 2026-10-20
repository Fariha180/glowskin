import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/currency';
import { ProductImage } from '../common/ProductImage';
import { StarRating } from '../common/StarRating';

export function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden rounded-[1.35rem] bg-beige/60">
        <Link to={`/products/${product.slug}`} className="block aspect-[4/5] overflow-hidden" aria-label={`View ${product.name}`}>
          <ProductImage src={product.image} alt={product.name} imageClassName="transition duration-700 group-hover:scale-[1.04]" />
        </Link>
        {(product.isNew || product.originalPrice > product.price) && <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur">{product.isNew ? 'Just in' : 'A little less'}</span>}
        <button onClick={() => addItem(product)} className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-soft transition hover:bg-sage hover:text-white" aria-label={`Add ${product.name} to bag`}><ShoppingBag size={17} strokeWidth={1.6} /></button>
      </div>
      <div className="pt-4"><div className="mb-1 flex items-center justify-between gap-2"><p className="text-[10px] uppercase tracking-[0.16em] text-sage">{product.category}</p><StarRating rating={product.rating} compact /></div><Link to={`/products/${product.slug}`} className="font-display text-[1.35rem] leading-tight text-ink transition hover:text-sage">{product.name}</Link><p className="mt-1 line-clamp-1 text-xs text-ink/55">{product.shortDescription}</p><div className="mt-3 flex items-center gap-2 text-sm"><span className="font-semibold">{formatCurrency(product.price)}</span>{product.originalPrice > product.price && <span className="text-xs text-ink/40 line-through">{formatCurrency(product.originalPrice)}</span>}</div></div>
    </article>
  );
}
