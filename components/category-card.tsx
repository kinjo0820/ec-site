import Link from "next/link";
import { Category } from "@/lib/types";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/products?category=${category.slug}`}>
      <div className="relative rounded-lg overflow-hidden group h-60">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${category.image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5 transition-opacity duration-300 group-hover:opacity-90" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{category.name}</h3>
          <p className="text-sm text-white/90 line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}