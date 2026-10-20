import { Leaf } from 'lucide-react';

export function EmptyState({ title, description, action }) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-6 py-20 text-center">
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-beige text-sage"><Leaf size={23} /></span>
      <h2 className="font-display text-3xl text-ink">{title}</h2>
      {description && <p className="mt-3 max-w-sm text-sm leading-7 text-ink/65">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
