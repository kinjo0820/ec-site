import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/data/products";
import { getCreator } from "@/lib/data/creators";
import { getProductsByCreator } from "@/lib/data/products";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductGallery } from "@/components/product-gallery";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { 
  ChevronRight, 
  Heart,
  Package, 
  Truck, 
  Shield
} from "lucide-react";

// Add generateStaticParams function to pre-render all product pages
export async function generateStaticParams() {
  const products = await getProducts();
  
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  
  if (!product) {
    return notFound();
  }

  const creator = await getCreator(product.creatorId);
  
  if (!creator) {
    return notFound();
  }
  
  // Get more products from the same creator
  const creatorProducts = await getProductsByCreator(creator.id);
  const relatedProducts = creatorProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-primary">Home</Link>
          </li>
          <li className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary">Products</Link>
          </li>
          <li className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            <Link 
              href={`/products?category=${product.category}`} 
              className="hover:text-primary capitalize"
            >
              {product.category}
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium truncate">
              {product.name}
            </span>
          </li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <ProductGallery images={product.images} />
        
        {/* Product Details */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 text-2xl font-semibold">
              ¥{product.price.toLocaleString()}
            </div>
            
            <div className="flex items-center mt-4">
              <div 
                className="h-10 w-10 rounded-full mr-3 bg-cover"
                style={{ backgroundImage: `url(${creator.image})` }}
              ></div>
              <div>
                <p className="text-sm text-muted-foreground">Created by</p>
                <Link 
                  href={`/creators/${creator.id}`}
                  className="text-primary font-medium hover:underline"
                >
                  {creator.name}
                </Link>
              </div>
            </div>
            
            <div className="mt-6 text-muted-foreground">
              <p>{product.description}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${
                product.stock > 5 
                  ? 'bg-green-500' 
                  : product.stock > 0 
                    ? 'bg-orange-500' 
                    : 'bg-red-500'
              }`}></span>
              <span className="font-medium">
                {product.stock > 5 
                  ? 'In Stock' 
                  : product.stock > 0 
                    ? `Low Stock (${product.stock} left)` 
                    : 'Sold Out'}
              </span>
            </div>
            
            <div className="flex space-x-4">
              <AddToCartButton product={product} />
              
              <Button variant="outline" size="icon" aria-label="Add to wishlist">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Product details accordion */}
          <div className="border-t border-b py-6 space-y-6">
            {product.materials.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {product.dimensions && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Dimensions</h3>
                <p>{product.dimensions}</p>
              </div>
            )}
            
            {product.careInstructions && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Care Instructions</h3>
                <p>{product.careInstructions}</p>
              </div>
            )}
          </div>
          
          {/* Shipping info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Package className="h-5 w-5 text-muted-foreground" />
              <span>Carefully packaged by hand</span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span>Ships in 2-3 business days</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Story Section */}
      <section className="mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">The Story Behind This Creation</h2>
          <div className="prose prose-slate dark:prose-invert mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              {product.story}
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold">More From {creator.name}</h2>
              <p className="text-muted-foreground">
                Discover other creations by the same artisan
              </p>
            </div>
            <Link 
              href={`/creators/${creator.id}`} 
              className="text-primary hover:underline"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}