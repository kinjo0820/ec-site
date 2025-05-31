"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        className={cn("group h-full cursor-pointer", className)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="overflow-hidden border-border h-full">
          <div className="relative aspect-square overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
              style={{
                backgroundImage: `url(${product.images[0]})`,
                transform: isHovered && product.images.length > 1 ? "scale(0)" : "scale(1)",
              }}
            />
            {product.images.length > 1 && (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${product.images[1]})`,
                  transform: isHovered ? "scale(1)" : "scale(1.1)",
                }}
              />
            )}
            {product.stock < 5 && product.stock > 0 && (
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full z-10">
                Low Stock
              </span>
            )}
            {product.stock === 0 && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full z-10">
                Sold Out
              </span>
            )}
            {product.featured && (
              <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full z-10">
                Featured
              </span>
            )}
          </div>
          
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground mb-1 capitalize">
              {product.category}
            </div>
            <h3 className="font-semibold text-lg mb-1 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-lg font-medium">
              ¥{product.price.toLocaleString()}
            </p>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}