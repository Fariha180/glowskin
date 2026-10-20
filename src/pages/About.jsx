import { ArrowRight, CircleCheck, Heart, Leaf, Sparkles } from 'lucide-react';
import { Button } from '../components/common/Button';
import { MotionItem, MotionSection } from '../components/common/MotionSection';
import { ProductImage } from '../components/common/ProductImage';

const values = [
  { icon: Leaf, title: 'Rooted in care', text: 'We look for ingredients with a purpose and leave room for skin to be skin.' },
  { icon: Heart, title: 'Gentle by design', text: 'A routine should support your day, not ask you to make it more complicated.' },
  { icon: Sparkles, title: 'Glow, your way', text: 'There is no single version of good skin. We make space for yours.' },
];

export function About() {
  return <div className="site-container pb-8 pt-12 sm:pt-16">
    <MotionSection className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
      <MotionItem as="div" className="max-w-xl"><p className="eyebrow">A little about us</p><h1 className="mt-3 font-display text-5xl leading-[0.98] sm:text-6xl">A slower kind<br />of skincare.</h1><p className="mt-6 text-sm leading-7 text-ink/65">GlowSkin began with a simple thought: care can be small, everyday, and still mean something. We make room for routines that feel less like a checklist and more like a moment you chose for yourself.</p><p className="mt-4 text-sm leading-7 text-ink/65">Our world is built around gentle essentials and thoughtful details. We believe a few considered steps can feel better than chasing every new thing.</p><Button as="link" to="/shop" variant="outline" className="mt-7">Explore the edit<ArrowRight size={15} /></Button></MotionItem>
      <MotionItem as="div" className="about-image aspect-[4/4.5] overflow-hidden rounded-[1.5rem] bg-beige" delay={0.1}><ProductImage src="https://res.cloudinary.com/c2dnliok/image/upload/v1792497525/about_dtnrfl.jpg" /></MotionItem>
    </MotionSection>
    <MotionSection className="section-space"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">What we believe</p><h2 className="section-title">Care, in the everyday.</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-ink/60">Our mission is to make intentional skincare feel approachable: comforting formulas, a clear point of view, and no pressure to be anything but yourself.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{values.map(({ icon: Icon, title, text }, index) => <MotionItem as="article" className="value-card" key={title} delay={index * 0.08} whileHover={{ y: -5 }}><Icon className="text-sage" size={22} strokeWidth={1.5} /><h3 className="mt-5 font-display text-2xl">{title}</h3><p className="mt-2 text-sm leading-7 text-ink/60">{text}</p></MotionItem>)}</div></MotionSection>
    <MotionSection className="rounded-[1.5rem] bg-[#F3DEE6] px-7 py-10 sm:px-12 sm:py-14"><div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center"><MotionItem as="div"><p className="eyebrow">Our skincare philosophy</p><h2 className="mt-3 max-w-xl font-display text-4xl leading-tight">Make space for a ritual that feels like yours.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-ink/65">Start with what your skin needs today. Keep the steps simple. Let consistency be kind. Our product pages share demo ingredient and usage details so you can explore the collection at your own pace.</p></MotionItem><div className="space-y-4">{['Keep it simple', 'Choose with intention', 'Take your time'].map((line, index) => <MotionItem as="p" key={line} delay={index * 0.06} className="flex items-center gap-3 border-b border-ink/10 pb-3 text-sm"><CircleCheck size={16} className="text-sage" />{line}</MotionItem>)}</div></div></MotionSection>
  </div>;
}
