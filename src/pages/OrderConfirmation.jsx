import { useEffect } from 'react';
import { Check, Leaf } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';

export function OrderConfirmation() {
  const { state } = useLocation();
  const { clearCart } = useCart();
  useEffect(() => { if (state?.orderNumber) clearCart(); }, [state?.orderNumber, clearCart]);
  return <section className="site-container flex min-h-[58vh] items-center justify-center py-16"><div className="w-full max-w-xl rounded-[1.5rem] bg-white px-7 py-12 text-center shadow-soft sm:px-12 sm:py-16"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E6ECE3] text-sage"><Check size={24} /></span><p className="eyebrow mt-6">{state?.orderNumber ? 'Your demo order is in' : 'A little GlowSkin moment'}</p><h1 className="mt-2 font-display text-4xl sm:text-5xl">{state?.orderNumber ? `Thank you${state.name ? `, ${state.name.split(' ')[0]}` : ''}.` : 'Your ritual starts here.'}</h1><p className="mx-auto mt-4 max-w-md text-sm leading-7 text-ink/60">{state?.orderNumber ? 'This is a demo confirmation. No payment was collected and your details were not sent anywhere.' : 'This is a sample confirmation page. Place a demo order from your bag to see a confirmation with local details.'}</p>{state?.orderNumber && <div className="mx-auto mt-7 max-w-sm rounded-xl bg-cream p-5 text-sm"><div className="flex justify-between gap-4"><span className="text-ink/55">Demo reference</span><span className="font-semibold">{state.orderNumber}</span></div><div className="mt-3 flex justify-between gap-4"><span className="text-ink/55">Demo total</span><span className="font-semibold">{formatCurrency(state.total)}</span></div></div>}<Button as="link" to="/shop" className="mt-7">Back to the shop<Leaf size={15} /></Button><p className="mt-5 text-[10px] text-ink/40">Sample/demo content · No real order or payment exists</p></div></section>;
}
