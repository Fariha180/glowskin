import { useEffect, useState } from 'react';
import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { EmptyState } from '../components/common/EmptyState';
import { ProductImage } from '../components/common/ProductImage';
import { ProductGrid } from '../components/products/ProductGrid';
import { StarRating } from '../components/common/StarRating';
import { useCart } from '../context/CartContext';
import { products, getProductBySlug } from '../data/products';
import { formatCurrency } from '../utils/currency';

export function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  useEffect(() => { setQuantity(1); setAdded(false); }, [slug]);
  if (!product) return <EmptyState title="We couldn’t find that product." description="It may have moved. Take a look through the full GlowSkin edit instead." action={<Button as="link" to="/shop">Explore the shop</Button>} />;
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  const onAdd = () => { addItem(product, quantity); setAdded(true); window.setTimeout(() => setAdded(false), 2400); };

  return <div className="site-container pb-8 pt-7 sm:pt-10">
    <Link to="/shop" className="mb-7 inline-flex items-center gap-2 text-xs text-ink/55 transition hover:text-sage"><ArrowLeft size={14} /> Back to the edit</Link>
    <section className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="product-detail-image aspect-[4/4.5] overflow-hidden rounded-[1.5rem] bg-beige"><ProductImage src={product.image} alt={product.name} /></div>
      <div className="flex flex-col justify-center py-3 lg:py-10"><p className="eyebrow">{product.category}</p><h1 className="mt-3 font-display text-4xl leading-none sm:text-5xl">{product.name}</h1><div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2"><StarRating rating={product.rating} reviewCount={product.reviewCount} /><span className="text-[10px] text-ink/40">Sample review data</span></div><div className="mt-5 flex items-center gap-3 text-lg"><span className="font-semibold">{formatCurrency(product.price)}</span>{product.originalPrice > product.price && <span className="text-sm text-ink/40 line-through">{formatCurrency(product.originalPrice)}</span>}</div><p className="mt-5 max-w-xl text-sm leading-7 text-ink/65">{product.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">{product.skinTypes.map((type) => <span key={type} className="rounded-full border border-sage/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] text-sage">{type}</span>)}</div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><div className="inline-flex h-12 items-center justify-between rounded-full border border-ink/15 bg-white px-2"><button onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-2.5" aria-label="Decrease quantity"><Minus size={14} /></button><span className="min-w-8 text-center text-sm">{quantity}</span><button onClick={() => setQuantity((value) => value + 1)} className="p-2.5" aria-label="Increase quantity"><Plus size={14} /></button></div><Button onClick={onAdd} className="flex-1">{added ? <><Check size={17} /> Added to your bag</> : <><ShoppingBag size={16} /> Add to bag</>}</Button></div>
        <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">{[['Ingredients', product.ingredients], ['Benefits', product.benefits]].map(([heading, values]) => <div key={heading} className="py-4"><h2 className="text-xs font-semibold uppercase tracking-[0.13em]">{heading}</h2><p className="mt-2 text-sm leading-6 text-ink/60">{values.join(' · ')}</p></div>)}<div className="py-4"><h2 className="text-xs font-semibold uppercase tracking-[0.13em]">How to use</h2><p className="mt-2 text-sm leading-6 text-ink/60">{product.usage}</p></div></div>
        <p className="mt-4 text-[10px] text-ink/40">Sample product description and ingredient information for demonstration.</p>
      </div>
    </section>
    {!!related.length && <section className="section-space"><div className="section-heading"><div><p className="eyebrow">Keep it in the family</p><h2 className="section-title">You may also like.</h2></div><Link to="/shop" className="text-link hidden sm:inline-flex">View all <ArrowLeft className="rotate-180" size={15} /></Link></div><ProductGrid products={related} /></section>}
  </div>;
}
