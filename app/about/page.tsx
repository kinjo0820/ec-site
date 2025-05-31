import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Story</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Connecting artisans, preserving traditions, and sharing the beauty of Ishigaki Island with the world.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              On the beautiful subtropical island of Ishigaki, located in Japan's Okinawa Prefecture, 
              we've created a community where artisans supported by B-type employment services can 
              showcase their exceptional talents and connect their creations with the world.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/products">Explore Our Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Meaningful Work</h3>
              <p className="text-muted-foreground">
                We believe in creating dignified employment opportunities that value each person's unique talents and accommodate their individual needs.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                  <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                  <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Preservation</h3>
              <p className="text-muted-foreground">
                We are committed to preserving and promoting the rich cultural heritage and traditional crafts of Ishigaki Island and the Ryukyu Kingdom.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We prioritize environmentally responsible practices, using natural and locally sourced materials whenever possible to honor and protect Ishigaki's unique ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About B-type Employment Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About B-type Employment Support</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  B-type employment support services (就労継続支援B型) in Japan are specialized programs designed to 
                  provide meaningful work opportunities for individuals with various disabilities or 
                  challenges that might make traditional employment difficult.
                </p>
                <p>
                  Unlike conventional workplaces, these programs offer flexible working conditions, 
                  personalized support, and an understanding environment where people can work at their 
                  own pace while developing skills and confidence.
                </p>
                <p>
                  Our platform exclusively features artworks created by talented individuals supported 
                  by these programs on Ishigaki Island, celebrating their unique perspectives and providing 
                  a global audience for their exceptional craftsmanship.
                </p>
                <p>
                  By purchasing these artworks, you're not just acquiring a beautiful piece - you're 
                  supporting meaningful employment opportunities and helping preserve traditional crafts 
                  while bringing a piece of Ishigaki's beauty into your home.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/3094211/pexels-photo-3094211.jpeg')" }}
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mt-8">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/4452373/pexels-photo-4452373.jpeg')" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ishigaki Island Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Ishigaki Island</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg')" }}
              />
            </div>
            
            <div className="lg:col-span-2">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg">
                  Ishigaki Island (石垣島, Ishigaki-jima) is the main island of the Yaeyama Islands and the second-largest 
                  island in Okinawa Prefecture after Okinawa Island itself. It is known for its pristine beaches, 
                  crystal-clear waters, mangrove forests, and abundant coral reefs.
                </p>
                <p className="text-lg">
                  Located in the westernmost part of Japan, the island is closer to Taiwan than to mainland Japan. 
                  This unique geographical position has influenced its distinct culture, which blends Japanese, 
                  Ryukyuan (the original kingdom of Okinawa), and various Asian influences.
                </p>
                <p className="text-lg">
                  The island's rich natural resources provide our artisans with inspiration and materials. 
                  From the star sand found on specific beaches to native plants used in natural dyeing processes, 
                  the environment of Ishigaki directly influences the creations you'll find in our collection.
                </p>
                <p className="text-lg">
                  Through our products, we aim to share not just beautiful crafts but also the spirit of 
                  Ishigaki - the island's natural beauty, cultural heritage, and the warmth of its community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            By supporting our artisans, you're helping preserve traditional crafts, provide meaningful
            employment opportunities, and bring a piece of Ishigaki's beauty into your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/products">Explore Our Collection</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}