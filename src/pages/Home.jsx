import { useState } from 'react';
import { ArrowDownRight, ArrowRight, Droplets, Flower2, Leaf, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { ProductImage } from '../components/common/ProductImage';
import { ProductGrid } from '../components/products/ProductGrid';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import { siteInfo } from '../data/siteInfo';

const benefits = [
  { icon: Leaf, title: 'Thoughtful ingredients', text: 'Comfort-first formulas, chosen with care and made to fit a real routine.' },
  { icon: Droplets, title: 'Less, but lovely', text: 'A considered edit of essentials that layer easily and feel good on skin.' },
  { icon: ShieldCheck, title: 'Kind to your ritual', text: 'Clear guidance, no pressure, and space to find what works for you.' },
];

export function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const bestsellers = [...products].sort((a, b) => b.popularity - a.popularity).slice(0, 4);
  const newArrivals = products.filter((product) => product.isNew).slice(0, 4);
  const submitNewsletter = (event) => { event.preventDefault(); if (event.currentTarget.reportValidity()) setSubscribed(true); };

  return (
    <>
      <section className="site-container py-5 sm:py-8">
        <div className="hero-panel relative grid min-h-[500px] overflow-hidden rounded-[1.6rem] bg-[#EEE7DE] lg:min-h-[590px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex flex-col items-start justify-center px-7 py-12 sm:px-12 md:px-14 lg:px-20">
            <p className="eyebrow mb-5">Good skin, good sense</p>
            <h1 className="max-w-xl font-display text-[3.5rem] leading-[0.94] tracking-[-0.035em] sm:text-6xl lg:text-[5.4rem]">A softer way<br />to feel like you.</h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-ink/65 sm:text-base">Thoughtful skincare for the everyday. Gentle formulas, grounding rituals, and a little room to glow at your own pace.</p>
            <Button as="link" to="/shop" className="mt-8">Shop the collection<ArrowRight size={16} /></Button>
            <span className="mt-9 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-ink/50"><ArrowDownRight size={14} /> Made for the moments in between</span>
          </div>
          <div className="hero-image absolute inset-y-0 right-0 w-full lg:relative lg:w-auto">
            <ProductImage src="/manus-storage/async-images/3OQct98pCR3b7KXXxYmyWU/image-1.webp" alt="GlowSkin-inspired skincare bottles in warm natural light" imageClassName="object-cover object-[62%_center]" />
          </div>
          <div className="hero-wash pointer-events-none absolute inset-0 z-[1] lg:hidden" />
          <div className="absolute bottom-5 right-5 z-10 hidden rounded-full border border-white/40 bg-cream/75 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-ink backdrop-blur lg:block">The everyday edit · 01</div>
        </div>
      </section>

      <section className="site-container section-space">
        <div className="section-heading"><div><p className="eyebrow">A ritual for every day</p><h2 className="section-title">Start where you are.</h2></div><Link to="/shop" className="text-link hidden sm:inline-flex">Explore everything <ArrowRight size={15} /></Link></div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {categories.map((category, index) => <Link key={category.name} to={`/shop?category=${encodeURIComponent(category.name)}`} className={`category-card group ${index % 2 ? 'lg:mt-9' : ''}`}><div className="category-image"><ProductImage src={category.image} alt={category.name} imageClassName="transition duration-700 group-hover:scale-105" /><span className="category-arrow"><ArrowRight size={17} /></span></div><p className="mt-4 font-display text-2xl sm:text-3xl">{category.name}</p><p className="mt-1 text-xs text-ink/55 sm:text-sm">{category.detail}</p></Link>)}
        </div>
      </section>

      <section className="section-space bg-[#F1EDE6]">
        <div className="site-container"><div className="section-heading"><div><p className="eyebrow">Most reached for</p><h2 className="section-title">A little daily care.</h2></div><Link to="/shop" className="text-link hidden sm:inline-flex">Shop all <ArrowRight size={15} /></Link></div><ProductGrid products={bestsellers} /></div>
      </section>

      <section className="site-container section-space">
        <div className="section-heading"><div><p className="eyebrow">Fresh to the shelf</p><h2 className="section-title">Meet the new ritual.</h2></div><Link to="/shop" className="text-link hidden sm:inline-flex">Find your favorite <ArrowRight size={15} /></Link></div><ProductGrid products={newArrivals} />
      </section>

      <section className="site-container pb-4">
        <div className="story-panel grid overflow-hidden rounded-[1.5rem] bg-sage text-white md:grid-cols-[1fr_1.15fr]">
          <div className="relative min-h-[310px] overflow-hidden bg-[#DCD8CE] md:min-h-[430px]"><ProductImage src="/manus-storage/async-images/3OQct98pCR3b7KXXxYmyWU/image-3.webp" alt="An amber serum bottle in gentle daylight" imageClassName="object-cover" /><span className="absolute bottom-5 left-5 rounded-full bg-cream/85 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-ink">A little more intentional</span></div>
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16"><p className="eyebrow text-white/65">The GlowSkin point of view</p><h2 className="mt-4 max-w-lg font-display text-4xl leading-[1.02] sm:text-5xl">Good skincare should feel like coming home.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/75">We believe consistency can be gentle, ingredients can have a purpose, and a routine can make a small moment feel like yours.</p><Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-medium">Our story <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="site-container section-space">
        <div className="mx-auto mb-12 max-w-2xl text-center"><p className="eyebrow">The things we come back to</p><h2 className="section-title">A good feeling, from the start.</h2></div>
        <div className="grid gap-8 md:grid-cols-3">{benefits.map(({ icon: Icon, title, text }, index) => <div key={title} className={`benefit-card ${index === 1 ? 'md:translate-y-5' : ''}`}><span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-beige text-sage"><Icon size={20} strokeWidth={1.5} /></span><h3 className="font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-7 text-ink/60">{text}</p></div>)}</div>
      </section>

      <section className="section-space bg-[#F1EDE6]">
        <div className="site-container"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Kind words, shared</p><h2 className="section-title">A softer kind of routine.</h2></div><div className="mt-9 grid gap-4 md:grid-cols-3">{reviews.map((review) => <article key={review.id} className="review-card"><div className="mb-4 flex gap-1 text-[#B6864B]">{Array.from({ length: review.rating }).map((_, index) => <Sparkles key={index} size={13} fill="currentColor" />)}</div><p className="font-display text-xl leading-snug">“{review.quote}”</p><p className="mt-5 text-[10px] uppercase tracking-[0.15em] text-ink/50">{review.name} · {review.location}</p></article>)}</div></div>
      </section>

      <section className="site-container py-20 sm:py-28">
        <div className="newsletter-panel mx-auto max-w-4xl rounded-[1.5rem] bg-[#EAE2D8] px-6 py-12 text-center sm:px-12 sm:py-16"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cream text-sage"><Flower2 size={20} /></span><p className="eyebrow mt-5">A note from us</p><h2 className="section-title mt-2">Good things, occasionally.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/60">A little care, a little inspiration, and no rush. Just thoughtful notes from the GlowSkin studio.</p>
          {subscribed ? <p role="status" className="mx-auto mt-7 max-w-sm rounded-xl bg-cream px-5 py-4 text-sm text-sage">Thanks for being here. This demo form doesn’t send or store your email.</p> : <form onSubmit={submitNewsletter} className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="filter-input flex-1 bg-cream px-5" /><Button type="submit" className="shrink-0">Join us</Button></form>}
          <p className="mt-4 text-[10px] text-ink/45">Demo feedback only · Your details aren’t sent anywhere</p>
        </div>
      </section>
    </>
  );
}
