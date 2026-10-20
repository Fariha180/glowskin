import { ArrowUpRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteInfo } from '../../data/siteInfo';

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="site-container grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div>
          <Link to="/" className="inline-flex items-center gap-2"><span className="brand-mark brand-mark-light"><span /></span><span className="font-display text-3xl">GlowSkin</span></Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">A slower kind of skincare. Thoughtful formulas, uncomplicated rituals, and a little more room to breathe.</p>
        </div>
        <div>
          <p className="eyebrow text-white/45">Explore</p>
          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-white/75">{siteInfo.navLinks.map((link) => <Link key={link.to} to={link.to} className="transition hover:text-white">{link.label}</Link>)}<Link to="/cart" className="transition hover:text-white">Your bag</Link></div>
        </div>
        <div>
          <p className="eyebrow text-white/45">Stay close</p>
          <a className="mt-4 inline-flex items-center gap-1 text-sm text-white/75 transition hover:text-white" href={`mailto:${siteInfo.email}`}>{siteInfo.email}<ArrowUpRight size={14} /></a>
          <div className="mt-4 flex gap-5">{siteInfo.socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-xs text-white/60 transition hover:text-white">{social.label}</a>)}</div>
        </div>
      </div>
      <div className="site-container flex flex-col gap-3 border-t border-white/10 py-5 text-[10px] uppercase tracking-[0.12em] text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} GlowSkin. Demo storefront.</span><span className="inline-flex items-center gap-2"><Leaf size={12} /> Care, with intention.</span></div>
    </footer>
  );
}
