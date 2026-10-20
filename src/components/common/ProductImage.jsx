import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

export function ProductImage({ src, alt, className = '', imageClassName = '' }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  if (failed || !src) {
    return <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-[#EAE2D8] to-[#F4EDE4] text-sage/70 ${className}`} role="img" aria-label={alt}><Leaf size={34} strokeWidth={1.2} /></div>;
  }
  return <img src={src} alt={alt} className={`h-full w-full object-cover ${imageClassName} ${className}`} loading="lazy" onError={() => setFailed(true)} />;
}
