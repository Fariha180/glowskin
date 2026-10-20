import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/currency';
import { ProductImage } from '../common/ProductImage';
import { StarRating } from '../common/StarRating';

export function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  return (
    <motion.article
      className="group flex h-full min-w-0 flex-col rounded-[1.45rem] border border-rose/80 bg-white/80 p-2.5 shadow-[0_8px_30px_rgba(56,21,37,0.045)]"
      layout
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      exit={{ opacity: 0, scale: 0.96, y: 8 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      transition={{ duration: 0.32, delay: Math.min(index * 0.045, 0.2), ease: 'easeOut' }}
    >
      <div className="relative shrink-0 overflow-hidden rounded-[1.15rem] bg-beige/60">
        <Link to={`/products/${product.slug}`} className="block aspect-[4/5] overflow-hidden" aria-label={`View ${product.name}`}>
          <ProductImage src={product.image} alt={product.name} imageClassName="transition duration-700 group-hover:scale-[1.04]" />
        </Link>
        {(product.isNew || product.originalPrice > product.price) && <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-burgundy shadow-sm backdrop-blur">{product.isNew ? 'Just in' : 'A little less'}</span>}
        <button onClick={() => addItem(product)} className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-burgundy text-white shadow-soft transition hover:bg-ink hover:scale-105" aria-label={`Add ${product.name} to bag`}><ShoppingBag size={17} strokeWidth={1.6} /></button>
      </div>
      <div className="flex flex-1 flex-col px-1.5 pb-2 pt-4">
        <div className="mb-1 flex items-center justify-between gap-2">
          <p className="text-[10px] uppercase tracking-[0.16em] text-burgundy">{product.category}</p>
          <StarRating rating={product.rating} compact />
        </div>
        <Link to={`/products/${product.slug}`} className="line-clamp-2 min-h-[2.45em] font-display text-[1.35rem] leading-tight text-ink transition hover:text-burgundy">{product.name}</Link>
        <p className="mt-1 line-clamp-2 min-h-[2.5em] text-xs leading-5 text-ink/55">{product.shortDescription}</p>
        <div className="mt-auto flex items-center gap-2 pt-3 text-sm">
          <span className="font-semibold">{formatCurrency(product.price)}</span>
          {product.originalPrice > product.price && <span className="text-xs text-ink/40 line-through">{formatCurrency(product.originalPrice)}</span>}
        </div>
      </div>
    </motion.article>
  );
}
