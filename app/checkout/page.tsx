"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CreditCard, Lock } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const checkoutFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Please enter your full name"),
  address: z.string().min(5, "Please enter your street address"),
  city: z.string().min(2, "Please enter your city"),
  prefecture: z.string().min(2, "Please enter your prefecture"),
  postalCode: z.string().min(3, "Please enter your postal code"),
  country: z.string().min(2, "Please enter your country"),
  cardNumber: z.string().min(16, "Please enter a valid card number"),
  cardExpiry: z.string().min(5, "Please enter a valid expiry date (MM/YY)"),
  cardCvc: z.string().min(3, "Please enter a valid CVC code"),
});

type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      name: "",
      address: "",
      city: "",
      prefecture: "",
      postalCode: "",
      country: "Japan",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
    },
  });
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Add some products to your cart before proceeding to checkout.
        </p>
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, we would send the data to an API endpoint
    // that would then interact with Stripe for payment processing
    
    toast({
      title: "Order completed!",
      description: "Thank you for your purchase. Your order has been placed successfully.",
    });
    
    clearCart();
    router.push("/checkout/success");
    
    setIsSubmitting(false);
  };

  const shippingCost = 800;
  const totalWithShipping = totalPrice + shippingCost;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" asChild>
          <Link href="/products" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
        <h1 className="text-3xl font-bold ml-auto mr-auto">Checkout</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Example St." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="City" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="prefecture"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prefecture</FormLabel>
                          <FormControl>
                            <Input placeholder="Prefecture" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postal Code</FormLabel>
                          <FormControl>
                            <Input placeholder="Postal Code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input placeholder="Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <div className="bg-muted/30 p-4 rounded-lg mb-4 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Your payment information is securely processed</span>
                </div>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="1234 5678 9012 3456" 
                              {...field} 
                              className="pl-10"
                            />
                            <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="cardExpiry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="cardCvc"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVC</FormLabel>
                          <FormControl>
                            <Input placeholder="123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : `Complete Purchase • ¥${totalWithShipping.toLocaleString()}`}
              </Button>
            </form>
          </Form>
        </div>
        
        {/* Order Summary */}
        <div className="bg-muted/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div 
                  className="w-20 h-20 bg-muted rounded-md flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-muted-foreground text-sm">Quantity: {item.quantity}</p>
                  <p className="mt-1">¥{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Separator className="my-6" />
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>¥{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>¥{shippingCost.toLocaleString()}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>¥{totalWithShipping.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              By completing your purchase, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}