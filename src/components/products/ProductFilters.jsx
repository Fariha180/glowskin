import { Search, SlidersHorizontal, X } from 'lucide-react';
import { categories } from '../../data/categories';

export function ProductFilters({ filters, setFilters, onClear, resultCount }) {
  const update = (key, value) => setFilters((current) => ({ ...current, [key]: value }));
  const active = filters.query || filters.category || filters.maxPrice < 100 || filters.minRating > 0 || filters.sort !== 'popular';
  return (
    <section className="mb-8 rounded-2xl border border-ink/10 bg-white/65 p-4 sm:p-5" aria-label="Product filters">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium"><SlidersHorizontal size={16} /> Find your ritual</div>
        <span className="text-xs text-ink/55">{resultCount} {resultCount === 1 ? 'product' : 'products'}</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
        <label className="relative">
          <span className="sr-only">Search products</span><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/45" />
          <input value={filters.query} onChange={(event) => update('query', event.target.value)} placeholder="Search by name" className="filter-input pl-10" />
        </label>
        <label><span className="sr-only">Category</span><select value={filters.category} onChange={(event) => update('category', event.target.value)} className="filter-input"><option value="">All categories</option>{categories.map((category) => <option key={category.name}>{category.name}</option>)}<option>Treatments</option></select></label>
        <label><span className="sr-only">Maximum price</span><select value={filters.maxPrice} onChange={(event) => update('maxPrice', Number(event.target.value))} className="filter-input"><option value="100">Any price</option><option value="25">Up to $25</option><option value="35">Up to $35</option><option value="45">Up to $45</option></select></label>
        <label><span className="sr-only">Minimum rating</span><select value={filters.minRating} onChange={(event) => update('minRating', Number(event.target.value))} className="filter-input"><option value="0">Any rating</option><option value="4">4+ stars</option><option value="4.5">4.5+ stars</option><option value="4.8">4.8+ stars</option></select></label>
        <label><span className="sr-only">Sort products</span><select value={filters.sort} onChange={(event) => update('sort', event.target.value)} className="filter-input"><option value="popular">Most loved</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="newest">Newest</option></select></label>
      </div>
      {active && <button onClick={onClear} className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-sage hover:text-ink"><X size={13} /> Clear all filters</button>}
    </section>
  );
}
