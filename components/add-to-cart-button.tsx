"use client";

import { useState } from "react";
import { ShoppingCart, Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (product.stock === 0) return;
    
    const { id, name, price, images, creatorId } = product;
    
    addToCart(
      {
        id, 
        name, 
        price, 
        image: images[0],
        creatorId,
      },
      quantity
    );
    
    setIsAdded(true);
    
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart.`,
    });
    
    setTimeout(() => setIsAdded(false), 2000);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  if (product.stock === 0) {
    return (
      <Button disabled className="w-full">
        Sold Out
      </Button>
    );
  }

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center">
        <div className="flex items-center border rounded-md mr-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-none"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-none"
            onClick={increaseQuantity}
            disabled={quantity >= product.stock}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
        
        <Button 
          onClick={handleAddToCart} 
          className="flex-1 py-6"
          disabled={isAdded}
        >
          {isAdded ? (
            <>
              <Check className="mr-2 h-5 w-5" /> Added
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
}