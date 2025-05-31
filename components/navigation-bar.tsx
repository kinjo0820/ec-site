"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Creators", href: "/creators" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-slate-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              石垣工芸
            </span>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
              className="text-gray-600 hover:text-primary dark:text-gray-300"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  aria-label="Shopping cart"
                  className="relative text-gray-600 hover:text-primary dark:text-gray-300"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Your Cart</h2>
                    <span className="text-sm text-muted-foreground">
                      {totalItems} items
                    </span>
                  </div>
                  
                  {cart.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                      <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">Your cart is empty</p>
                      <Button asChild variant="outline">
                        <Link href="/products">Continue Shopping</Link>
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex-1 overflow-auto -mx-6 px-6">
                        {cart.map((item) => (
                          <div 
                            key={item.id}
                            className="flex items-center py-4 border-b border-border"
                          >
                            <div 
                              className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0"
                              style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                              }}
                            />
                            <div className="ml-4 flex-1">
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">¥{(item.price * item.quantity).toLocaleString()}</p>
                          </div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-border mt-auto">
                        <div className="flex justify-between mb-4">
                          <span>Subtotal</span>
                          <span className="font-semibold">
                            ¥{cart.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString()}
                          </span>
                        </div>
                        <Button asChild className="w-full">
                          <Link href="/checkout">Proceed to Checkout</Link>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isSearchOpen ? "h-16 mt-4 opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search for products, creators..." 
              className="pr-10" 
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                石垣工芸
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 overflow-auto py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-6 py-4 text-lg font-medium border-l-4 ${
                  pathname === item.href
                    ? "border-primary text-primary"
                    : "border-transparent text-foreground hover:text-primary hover:border-primary/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}