import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, LockKeyhole } from 'lucide-react';
import { Button } from '../components/common/Button';
import { MotionItem, MotionSection } from '../components/common/MotionSection';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';

export function Checkout() {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();
  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    navigate('/order-confirmation', { state: { orderNumber: `GS-${Date.now().toString().slice(-6)}`, total: subtotal, name: data.get('name') } });
  };

  if (!items.length) return <MotionSection className="site-container pb-8 pt-12 sm:pt-16"><MotionItem as="div" className="mx-auto max-w-2xl rounded-2xl bg-white p-7 text-center shadow-soft sm:p-12"><p className="eyebrow">Nothing to check out yet</p><h1 className="mt-3 font-display text-4xl">Your bag is empty.</h1><p className="mt-3 text-sm text-ink/60">Add something from the collection before continuing.</p><Button as="link" to="/shop" className="mt-6">Explore the shop</Button></MotionItem></MotionSection>;

  return <MotionSection className="site-container min-h-[55vh] pb-8 pt-12 sm:pt-16">
    <MotionItem as="div" className="mb-5"><Link to="/cart" className="inline-flex items-center gap-2 text-xs text-ink/55 transition hover:text-sage"><ArrowLeft size={14} /> Back to bag</Link></MotionItem>
    <MotionItem as="div" className="mb-8"><p className="eyebrow">One last little step</p><h1 className="section-title">Demo checkout.</h1><p className="mt-3 text-xs text-ink/55">No payment is collected and your details stay in this browser session.</p></MotionItem>
    <div className="grid items-start gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
      <motion.form onSubmit={submit} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
        <h2 className="font-display text-2xl">Your details</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2"><label className="form-label sm:col-span-2">Full name<input className="form-input" name="name" type="text" autoComplete="name" required placeholder="Your name" /></label><label className="form-label">Email address<input className="form-input" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label className="form-label">Phone number<input className="form-input" name="phone" type="tel" autoComplete="tel" required placeholder="(555) 123-4567" /></label></div>
        <h2 className="mt-8 border-t border-ink/10 pt-7 font-display text-2xl">Shipping address</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="form-label sm:col-span-2">Street address<input className="form-input" name="address" type="text" autoComplete="street-address" required placeholder="Street and number" /></label><label className="form-label">City<input className="form-input" name="city" type="text" autoComplete="address-level2" required placeholder="City" /></label><label className="form-label">State / region<input className="form-input" name="region" type="text" autoComplete="address-level1" required placeholder="State or region" /></label><label className="form-label">Postal code<input className="form-input" name="postalCode" type="text" autoComplete="postal-code" required placeholder="Postal code" /></label><label className="form-label">Country<input className="form-input" name="country" type="text" autoComplete="country-name" required placeholder="Country" /></label></div>
        <Button type="submit" className="mt-7 w-full">Place demo order · {formatCurrency(subtotal)}</Button><p className="mt-4 flex items-center justify-center gap-2 text-[10px] text-ink/45"><LockKeyhole size={12} /> Demo only · No real payment or external data transfer</p>
      </motion.form>
      <motion.aside initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.08 }} className="rounded-2xl bg-white p-6 shadow-soft sm:p-7"><h2 className="font-display text-2xl">Your items</h2><div className="mt-5 space-y-4">{items.map((item, index) => <motion.div layout key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="flex justify-between gap-4 text-sm"><span className="text-ink/70">{item.name} <span className="text-ink/40">× {item.quantity}</span></span><span className="shrink-0">{formatCurrency(item.price * item.quantity)}</span></motion.div>)}</div><div className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-sm"><div className="flex justify-between text-ink/65"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div><div className="flex justify-between text-ink/65"><span>Shipping</span><span>Complimentary</span></div><div className="flex justify-between border-t border-ink/10 pt-4 text-base font-semibold"><span>Total</span><span>{formatCurrency(subtotal)}</span></div></div><p className="mt-4 text-center text-[10px] leading-5 text-ink/45">Demo total before any applicable taxes. No payment is collected.</p></motion.aside>
    </div>
  </MotionSection>;
}
