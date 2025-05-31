import { getCreators } from "@/lib/data/creators";
import { CreatorCard } from "@/components/creator-card";

export default async function CreatorsPage() {
  const creators = await getCreators();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">Meet Our Artisans</h1>
        <p className="text-xl text-muted-foreground">
          Behind each creation is a talented individual with a unique story and 
          connection to Ishigaki Island. Discover the passionate artisans who 
          bring our products to life.
        </p>
      </div>

      {/* Creators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}