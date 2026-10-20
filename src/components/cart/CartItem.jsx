import { Minus, Plus, Trash2 } from 'lucide-react';
import { ProductImage } from '../common/ProductImage';
import { formatCurrency } from '../../utils/currency';

export function CartItem({ item, updateQuantity, removeItem, index = 0 }) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.28, delay: index * 0.05 }} className="flex gap-4 border-b border-ink/10 py-5 sm:gap-6">
      <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-beige sm:h-32 sm:w-28"><ProductImage src={item.image} alt={item.name} /></div>
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div><p className="text-[10px] uppercase tracking-[0.15em] text-sage">{item.category}</p><h2 className="mt-1 font-display text-xl sm:text-2xl">{item.name}</h2><p className="mt-1 text-sm font-medium">{formatCurrency(item.price)}</p></div>
        <div className="flex items-center justify-between gap-4 sm:justify-end">
          <div className="inline-flex items-center rounded-full border border-ink/10 bg-white"><button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2.5" aria-label={`Decrease ${item.name} quantity`}><Minus size={13} /></button><span className="min-w-7 text-center text-sm">{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2.5" aria-label={`Increase ${item.name} quantity`}><Plus size={13} /></button></div>
          <span className="min-w-16 text-right text-sm font-semibold">{formatCurrency(item.price * item.quantity)}</span>
          <button onClick={() => removeItem(item.id)} className="rounded-full p-2 text-ink/45 transition hover:bg-beige hover:text-ink" aria-label={`Remove ${item.name}`}><Trash2 size={16} /></button>
        </div>
      </div>
    </motion.article>
  );
}
import { motion } from 'framer-motion';
