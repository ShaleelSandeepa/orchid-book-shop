'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/shop';
import { useShopStore } from '@/store/shop-store';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart, addToWishlist, wishlist } = useShopStore();

  const isInWishlist = wishlist.some(item => item.id === product.id);
  const isOutOfStock = product.stock === 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isOutOfStock) {
      addToCart(product);
    }
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          {/* Product Image */}
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className={cn(
                "object-cover transition-all duration-500 group-hover:scale-105",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.featured && (
              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                Featured
              </Badge>
            )}
            {isOutOfStock && (
              <Badge variant="destructive">
                Out of Stock
              </Badge>
            )}
            {product.stock < 5 && product.stock > 0 && (
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Low Stock
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.2 }}
            className="absolute top-3 right-3 flex flex-col gap-2"
          >
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 bg-white/90 hover:bg-white shadow-sm"
              onClick={handleAddToWishlist}
            >
              <Heart 
                className={cn(
                  "h-4 w-4 transition-colors",
                  isInWishlist ? "fill-red-500 text-red-500" : "text-gray-600"
                )} 
              />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 bg-white/90 hover:bg-white shadow-sm"
              asChild
            >
              <Link href={`/product/${product.id}`}>
                <Eye className="h-4 w-4 text-gray-600" />
              </Link>
            </Button>
          </motion.div>

          {/* Quick Add to Cart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="absolute bottom-3 left-3 right-3"
          >
            <Button
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </motion.div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            {/* Category */}
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {product.subcategory}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-600">{product.rating}</span>
              </div>
            </div>

            {/* Title */}
            <Link href={`/product/${product.id}`}>
              <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-purple-600 transition-colors">
                {product.title}
              </h3>
            </Link>

            {/* Author (for books) */}
            {product.author && (
              <p className="text-sm text-gray-600">by {product.author}</p>
            )}

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {product.stock} in stock
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}