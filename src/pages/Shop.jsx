import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { EmptyState } from '../components/common/EmptyState';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductFilters } from '../components/products/ProductFilters';
import { products } from '../data/products';

const freshFilters = (category = '') => ({ query: '', category, maxPrice: 100, minRating: 0, sort: 'popular' });

export function Shop() {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState(() => freshFilters(params.get('category') || ''));
  const shownProducts = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const filtered = products.filter((product) =>
      (!query || product.name.toLowerCase().includes(query)) &&
      (!filters.category || product.category === filters.category) &&
      product.price <= filters.maxPrice && product.rating >= filters.minRating,
    );
    return filtered.sort((a, b) => {
      if (filters.sort === 'price-low') return a.price - b.price;
      if (filters.sort === 'price-high') return b.price - a.price;
      if (filters.sort === 'newest') return Number(b.isNew) - Number(a.isNew) || b.id - a.id;
      return b.popularity - a.popularity;
    });
  }, [filters]);
  const clear = () => setFilters(freshFilters());

  return <section className="site-container min-h-[55vh] pb-8 pt-12 sm:pt-16">
    <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Find what feels right</p><h1 className="section-title">The skincare edit.</h1><p className="mt-3 max-w-xl text-sm leading-7 text-ink/60">Simple, considered essentials for wherever you are in your routine.</p></div><Button as="link" to="/about" variant="outline">Our approach</Button></div>
    <ProductFilters filters={filters} setFilters={setFilters} onClear={clear} resultCount={shownProducts.length} />
    {shownProducts.length ? <ProductGrid products={shownProducts} /> : <EmptyState title="Nothing in this little corner yet." description="Try another search or clear a few filters to see the whole collection." action={<button onClick={clear} className="text-sm font-semibold text-sage underline underline-offset-4">Clear all filters</button>} />}
    <p className="mt-12 text-center text-[10px] uppercase tracking-[0.12em] text-ink/40">Sample product information for demonstration only</p>
  </section>;
}
