"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-square w-full bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">No image available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div 
        className="aspect-square w-full relative rounded-lg overflow-hidden bg-muted"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[selectedIndex]})` }}
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={cn(
                "aspect-square relative rounded-md overflow-hidden border-2 transition",
                selectedIndex === idx ? "border-primary" : "border-transparent"
              )}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}