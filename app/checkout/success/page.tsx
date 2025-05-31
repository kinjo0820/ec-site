"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  const [orderNumber, setOrderNumber] = useState("");
  
  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderNumber(randomOrderNumber);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        
        <p className="text-muted-foreground mb-6">
          Your order #{orderNumber} has been received and is now being processed. You will receive 
          an email confirmation shortly.
        </p>
        
        <div className="bg-muted/30 rounded-lg p-6 mb-8 text-left">
          <h2 className="font-semibold mb-4 flex items-center">
            <Package className="h-5 w-5 mr-2" /> 
            What happens next?
          </h2>
          <ul className="space-y-3">
            <li className="flex">
              <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
              <span>Your order will be carefully packed by our artisans.</span>
            </li>
            <li className="flex">
              <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
              <span>We'll send you a shipping confirmation email with tracking information.</span>
            </li>
            <li className="flex">
              <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
              <span>Your package will typically arrive within 5-7 business days.</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/products">
              Continue Shopping
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact" className="flex items-center">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}