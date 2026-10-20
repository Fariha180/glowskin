import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { Button } from '../components/common/Button';
import { EmptyState } from '../components/common/EmptyState';
import { CartItem } from '../components/cart/CartItem';
import { CartSummary } from '../components/cart/CartSummary';
import { MotionItem, MotionSection } from '../components/common/MotionSection';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  if (!items.length) return <MotionSection className="site-container"><EmptyState title="Your bag is taking a quiet moment." description="When something feels right, you’ll find it here." action={<Button as="link" to="/shop">Continue shopping</Button>} /></MotionSection>;
  return <MotionSection className="site-container min-h-[55vh] pb-8 pt-12 sm:pt-16">
    <MotionItem as="div" className="mb-5"><Link to="/shop" className="inline-flex items-center gap-2 text-xs text-ink/55 transition hover:text-sage"><ArrowLeft size={14} /> Continue shopping</Link></MotionItem>
    <MotionItem as="div" className="mb-8 flex items-end justify-between"><div><p className="eyebrow">A little care, on its way</p><h1 className="section-title">Your bag.</h1></div><p className="text-xs text-ink/50">{items.reduce((sum, item) => sum + item.quantity, 0)} items</p></MotionItem>
    <div className="grid gap-9 lg:grid-cols-[1.5fr_0.8fr] lg:gap-14"><div><AnimatePresence initial={false}>{items.map((item, index) => <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} index={index} />)}</AnimatePresence></div><div><CartSummary subtotal={subtotal} /></div></div>
  </MotionSection>;
}
