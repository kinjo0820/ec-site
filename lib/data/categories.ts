import { Category } from "../types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Pottery",
    slug: "pottery",
    description: "Traditional and contemporary ceramic pieces including Shisa guardians, vases, plates and functional items.",
    image: "https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg"
  },
  {
    id: "2",
    name: "Textiles",
    slug: "textiles",
    description: "Handwoven and naturally dyed fabrics, including traditional Minsa weaving and contemporary designs.",
    image: "https://images.pexels.com/photos/6044213/pexels-photo-6044213.jpeg"
  },
  {
    id: "3",
    name: "Accessories",
    slug: "accessories",
    description: "Wearable art including jewelry, bags, and other personal items made from natural and upcycled materials.",
    image: "https://images.pexels.com/photos/10971870/pexels-photo-10971870.jpeg"
  },
  {
    id: "4",
    name: "Art",
    slug: "art",
    description: "Original paintings, prints, and sculptures inspired by Ishigaki's natural beauty and cultural heritage.",
    image: "https://images.pexels.com/photos/7550827/pexels-photo-7550827.jpeg"
  },
  {
    id: "5",
    name: "Home",
    slug: "home",
    description: "Decorative and functional items for your living space, from candles and textiles to wooden crafts.",
    image: "https://images.pexels.com/photos/5765056/pexels-photo-5765056.jpeg"
  },
  {
    id: "6",
    name: "Stationery",
    slug: "stationery",
    description: "Handmade paper products, notebooks, and writing accessories created with sustainable materials.",
    image: "https://images.pexels.com/photos/6192226/pexels-photo-6192226.jpeg"
  }
];

export async function getCategories(): Promise<Category[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));
  return categories;
}

export async function getCategory(slug: string): Promise<Category | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));
  return categories.find((category) => category.slug === slug) || null;
}