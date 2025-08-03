'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Filter, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { categories } from '@/lib/mock-data';

export interface FilterState {
  categories: string[];
  subcategories: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
  featured: boolean;
}

interface FiltersSidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function FiltersSidebar({ filters, onFiltersChange, isOpen, onClose }: FiltersSidebarProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...localFilters.categories, categoryId]
      : localFilters.categories.filter(id => id !== categoryId);
    
    const newFilters = { ...localFilters, categories: newCategories };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
    const newSubcategories = checked
      ? [...localFilters.subcategories, subcategory]
      : localFilters.subcategories.filter(sub => sub !== subcategory);
    
    const newFilters = { ...localFilters, subcategories: newSubcategories };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handlePriceRangeChange = (value: number[]) => {
    const newFilters = { ...localFilters, priceRange: [value[0], value[1]] as [number, number] };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...localFilters, rating };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleToggleChange = (key: 'inStock' | 'featured', checked: boolean) => {
    const newFilters = { ...localFilters, [key]: checked };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterState = {
      categories: [],
      subcategories: [],
      priceRange: [0, 200],
      rating: 0,
      inStock: false,
      featured: false
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const getActiveFiltersCount = () => {
    return (
      localFilters.categories.length +
      localFilters.subcategories.length +
      (localFilters.rating > 0 ? 1 : 0) +
      (localFilters.inStock ? 1 : 0) +
      (localFilters.featured ? 1 : 0) +
      (localFilters.priceRange[0] > 0 || localFilters.priceRange[1] < 200 ? 1 : 0)
    );
  };

  const sidebarContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Filters</h2>
          {getActiveFiltersCount() > 0 && (
            <Badge variant="secondary" className="ml-2">
              {getActiveFiltersCount()}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator />

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={localFilters.categories.includes(category.id)}
                  onCheckedChange={(checked) => 
                    handleCategoryChange(category.id, checked as boolean)
                  }
                />
                <Label htmlFor={category.id} className="text-sm font-medium">
                  {category.name}
                </Label>
              </div>
              
              {/* Subcategories */}
              {localFilters.categories.includes(category.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-6 space-y-2"
                >
                  {category.subcategories.map((subcategory) => (
                    <div key={subcategory} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${category.id}-${subcategory}`}
                        checked={localFilters.subcategories.includes(subcategory)}
                        onCheckedChange={(checked) => 
                          handleSubcategoryChange(subcategory, checked as boolean)
                        }
                      />
                      <Label htmlFor={`${category.id}-${subcategory}`} className="text-xs text-gray-600">
                        {subcategory}
                      </Label>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={localFilters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={200}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${localFilters.priceRange[0]}</span>
            <span>${localFilters.priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Minimum Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={localFilters.rating === rating}
                onCheckedChange={(checked) => 
                  handleRatingChange(checked ? rating : 0)
                }
              />
              <Label htmlFor={`rating-${rating}`} className="flex items-center gap-1 text-sm">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">& up</span>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Additional Filters */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Additional Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="in-stock"
              checked={localFilters.inStock}
              onCheckedChange={(checked) => 
                handleToggleChange('inStock', checked as boolean)
              }
            />
            <Label htmlFor="in-stock" className="text-sm">
              In Stock Only
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured"
              checked={localFilters.featured}
              onCheckedChange={(checked) => 
                handleToggleChange('featured', checked as boolean)
              }
            />
            <Label htmlFor="featured" className="text-sm">
              Featured Products
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto lg:relative lg:translate-x-0 lg:shadow-none lg:bg-transparent lg:w-full"
      >
        <div className="p-6 lg:p-0">
          {sidebarContent}
        </div>
      </motion.div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="sticky top-24">
          {sidebarContent}
        </div>
      </div>
    </>
  );
}