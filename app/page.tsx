import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/data/products";
import { getCategories } from "@/lib/data/categories";
import { getCreators } from "@/lib/data/creators";
import { ProductCard } from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";
import { CreatorCard } from "@/components/creator-card";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const categories = await getCategories();
  const creators = await getCreators();
  const featuredCreators = creators.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Handcrafted with Passion from Ishigaki Island
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Discover unique artworks created by talented artisans supported by 
              B-type employment services on Ishigaki Island, Okinawa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="rounded-full">
                <Link href="/products">Explore Collection</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent text-white border-white hover:bg-white/10">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Artworks</h2>
              <p className="text-muted-foreground max-w-2xl">
                Each piece tells a story, connecting you to the natural beauty and cultural heritage of Ishigaki Island.
              </p>
            </div>
            <Link href="/products" className="text-primary font-medium mt-4 md:mt-0 hover:underline">
              View All Products →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore By Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/10095880/pexels-photo-10095880.jpeg"
                fill
                alt="Artisans at work on Ishigaki Island"
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story & Mission</h2>
              <p className="text-muted-foreground mb-6">
                On the beautiful subtropical island of Ishigaki, located in Japan's Okinawa Prefecture, 
                we've created a community where artisans supported by B-type employment services can 
                showcase their exceptional talents and connect their creations with the world.
              </p>
              <p className="text-muted-foreground mb-6">
                Each handcrafted piece not only represents hours of dedicated craftsmanship but also 
                embodies the creator's unique connection to Ishigaki Island's rich cultural heritage 
                and breathtaking natural environment.
              </p>
              <p className="text-muted-foreground mb-8">
                By purchasing these artworks, you're supporting meaningful employment opportunities 
                and helping preserve traditional crafts while bringing a piece of Ishigaki's beauty 
                into your home.
              </p>
              
              <Button asChild>
                <Link href="/about">Learn More About Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Creators Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet The Creators</h2>
              <p className="text-muted-foreground max-w-2xl">
                Behind each creation is a talented individual with a unique story and connection to Ishigaki Island.
              </p>
            </div>
            <Link href="/creators" className="text-primary font-medium mt-4 md:mt-0 hover:underline">
              View All Creators →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCreators.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg')",
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive updates on new artworks, creator stories, and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Ishigaki Artisans.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}