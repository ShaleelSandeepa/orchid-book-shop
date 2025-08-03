'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductGrid } from '@/components/shop/product-grid';
import { FiltersSidebar, FilterState } from '@/components/shop/filters-sidebar';
import { SearchBar } from '@/components/shop/search-bar';
import { SortDropdown, SortOption } from '@/components/shop/sort-dropdown';
import { mockProducts } from '@/lib/mock-data';
import { Product } from '@/types/shop';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(true);
  
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    subcategories: [],
    priceRange: [0, 200],
    rating: 0,
    inStock: false,
    featured: false
  });

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts.filter((product) => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.author?.toLowerCase().includes(query) ||
          product.subcategory.toLowerCase().includes(query);
        
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Subcategory filter
      if (filters.subcategories.length > 0 && !filters.subcategories.includes(product.subcategory)) {
        return false;
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }

      // In stock filter
      if (filters.inStock && product.stock === 0) {
        return false;
      }

      // Featured filter
      if (filters.featured && !product.featured) {
        return false;
      }

      return true;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name-az':
          return a.title.localeCompare(b.title);
        case 'name-za':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [mockProducts, searchQuery, filters, sortBy]);

  const getActiveFiltersCount = () => {
    return (
      filters.categories.length +
      filters.subcategories.length +
      (filters.rating > 0 ? 1 : 0) +
      (filters.inStock ? 1 : 0) +
      (filters.featured ? 1 : 0) +
      (filters.priceRange[0] > 0 || filters.priceRange[1] < 200 ? 1 : 0)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop All Products</h1>
          <p className="text-gray-600">
            Discover our complete collection of books, stationery, and ISP packages
          </p>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 space-y-4"
        >
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search books, stationery, ISP packages..."
              />
            </div>
            <div className="flex items-center gap-2">
              <SortDropdown value={sortBy} onChange={setSortBy} />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="hidden sm:flex"
              >
                {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between lg:hidden">
            <Button
              variant="outline"
              onClick={() => setIsFiltersOpen(true)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
              {getActiveFiltersCount() > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {getActiveFiltersCount()}
                </Badge>
              )}
            </Button>
            <div className="text-sm text-gray-600">
              {filteredAndSortedProducts.length} products found
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <FiltersSidebar
            filters={filters}
            onFiltersChange={setFilters}
            isOpen={isFiltersOpen}
            onClose={() => setIsFiltersOpen(false)}
          />

          {/* Products */}
          <div className="flex-1 min-w-0">
            {/* Results Header - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex items-center justify-between mb-6"
            >
              <div className="text-sm text-gray-600">
                Showing {filteredAndSortedProducts.length} of {mockProducts.length} products
              </div>
              <div className="flex items-center gap-2">
                {getActiveFiltersCount() > 0 && (
                  <Badge variant="secondary">
                    {getActiveFiltersCount()} filters applied
                  </Badge>
                )}
              </div>
            </motion.div>

            {/* Product Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ProductGrid products={filteredAndSortedProducts} isLoading={isLoading} />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}