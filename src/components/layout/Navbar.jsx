import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();
  const close = () => setOpen(false);
  return (
    <>
      <div className="bg-sage px-4 py-2 text-center text-[10px] uppercase tracking-[0.18em] text-white sm:text-[11px]">Thoughtful essentials · Complimentary shipping</div>
      <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/95 backdrop-blur-md">
        <nav className="site-container flex h-[76px] items-center justify-between" aria-label="Main navigation">
          <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={21} /></button>
          <Link to="/" className="flex items-center gap-2" aria-label="GlowSkin home"><span className="brand-mark"><span /></span><span className="font-display text-3xl leading-none tracking-tight">GlowSkin</span></Link>
          <div className="hidden items-center gap-9 lg:flex">{links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>{link.label}</NavLink>)}</div>
          <Link to="/cart" className="relative flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-beige" aria-label={`Shopping bag, ${itemCount} items`}><ShoppingBag size={19} strokeWidth={1.5} />{itemCount > 0 && <span className="absolute right-0.5 top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-sage px-1 text-[9px] font-semibold text-white">{itemCount}</span>}</Link>
        </nav>
      </header>
      {open && <div className="fixed inset-0 z-50 bg-ink/25 lg:hidden" onClick={close}><div className="h-full w-[min(85vw,380px)] bg-cream p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between"><Link to="/" onClick={close} className="font-display text-3xl">GlowSkin</Link><button onClick={close} className="rounded-full p-2" aria-label="Close menu"><X size={20} /></button></div><div className="mt-10 flex flex-col">{links.map((link) => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={close} className={({ isActive }) => `border-b border-ink/10 py-4 font-display text-2xl ${isActive ? 'text-sage' : 'text-ink'}`}>{link.label}</NavLink>)}<Link to="/cart" onClick={close} className="flex items-center justify-between border-b border-ink/10 py-4 font-display text-2xl">Your bag <span className="font-sans text-sm text-sage">{itemCount} items</span></Link></div><p className="mt-10 text-xs leading-6 text-ink/55">Simple rituals, thoughtful ingredients, room to breathe.</p></div></div>}
    </>
  );
}
