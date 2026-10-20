import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';
import { EmptyState } from '../components/common/EmptyState';
import { CartItem } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  if (!items.length) return <div className="site-container"><EmptyState title="Your bag is taking a quiet moment." description="When something feels right, you’ll find it here." action={<Button as="link" to="/shop">Continue shopping</Button>} /></div>;
  return <section className="site-container min-h-[55vh] pb-8 pt-12 sm:pt-16">
    <Link to="/shop" className="mb-5 inline-flex items-center gap-2 text-xs text-ink/55 transition hover:text-sage"><ArrowLeft size={14} /> Continue shopping</Link>
    <div className="mb-8 flex items-end justify-between"><div><p className="eyebrow">A little care, on its way</p><h1 className="section-title">Your bag.</h1></div><p className="text-xs text-ink/50">{items.reduce((sum, item) => sum + item.quantity, 0)} items</p></div>
    <div className="grid gap-9 lg:grid-cols-[1.5fr_0.8fr] lg:gap-14"><div>{items.map((item) => <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />)}</div><div><CartSummary subtotal={subtotal} /></div></div>
  </section>;
}
