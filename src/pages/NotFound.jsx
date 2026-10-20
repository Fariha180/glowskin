import { ArrowLeft, Leaf } from 'lucide-react';
import { Button } from '../components/common/Button';

export function NotFound() {
  return <section className="site-container flex min-h-[55vh] items-center justify-center py-20"><div className="text-center"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-beige text-sage"><Leaf size={24} /></span><p className="eyebrow mt-6">404 · A little detour</p><h1 className="mt-2 font-display text-5xl">This page wandered off.</h1><p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-ink/60">The page you’re looking for isn’t here, but there’s plenty to discover back at the beginning.</p><Button as="link" to="/" className="mt-7"><ArrowLeft size={15} /> Back home</Button></div></section>;
}
