import Link from "next/link";
import { Creator } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";

type CreatorCardProps = {
  creator: Creator;
};

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <Link href={`/creators/${creator.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative h-64 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
            style={{
              backgroundImage: `url(${creator.image})`,
              backgroundPosition: "center top",
            }}
          />
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-1">{creator.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{creator.profile}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {creator.specialties.map((specialty, index) => (
              <span 
                key={index} 
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-primary/20 bg-primary/10 text-primary hover:bg-primary/20"
              >
                {specialty}
              </span>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-3">
            {creator.bio}
          </p>
          
          <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
            View Profile
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}