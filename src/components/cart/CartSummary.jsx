import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { formatCurrency } from '../../utils/currency';

export function CartSummary({ subtotal, checkoutLabel = 'Continue to checkout' }) {
  return (
    <motion.aside initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12 }} className="rounded-2xl bg-white p-6 shadow-soft sm:p-7">
      <h2 className="font-display text-2xl">Order summary</h2>
      <div className="mt-6 space-y-3 text-sm"><div className="flex justify-between text-ink/65"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div><div className="flex justify-between text-ink/65"><span>Shipping</span><span>Complimentary</span></div><div className="border-t border-ink/10 pt-4"><div className="flex justify-between text-base font-semibold"><span>Total</span><span>{formatCurrency(subtotal)}</span></div><p className="mt-1 text-[11px] text-ink/45">Demo total before any applicable taxes.</p></div></div>
      <Button as="link" to="/checkout" className="mt-6 w-full">{checkoutLabel}<ArrowRight size={16} /></Button>
      <p className="mt-4 text-center text-[11px] leading-5 text-ink/45">Demo checkout only. No payment is collected.</p>
    </motion.aside>
  );
}
import { motion } from 'framer-motion';
