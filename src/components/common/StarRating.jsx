import { Star } from 'lucide-react';

export function StarRating({ rating = 0, reviewCount, compact = false }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-ink/65" aria-label={`${rating} out of 5 stars${reviewCount ? `, ${reviewCount} reviews` : ''}`}>
      <span className="inline-flex items-center gap-0.5 text-[#B6864B]">
        <Star size={13} fill="currentColor" strokeWidth={1.5} />
        <span className="font-semibold text-ink">{Number(rating).toFixed(1)}</span>
      </span>
      {!compact && reviewCount !== undefined && <span>({reviewCount} reviews)</span>}
    </span>
  );
}
