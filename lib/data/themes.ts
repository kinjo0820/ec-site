import { Theme } from "../types";

export const themes: Theme[] = [
  {
    id: "1",
    name: "Ocean & Marine Life",
    slug: "ocean",
    description: "Designs inspired by Ishigaki's famous blue waters, coral reefs, and diverse marine life."
  },
  {
    id: "2",
    name: "Traditional Ryukyu Culture",
    slug: "traditional",
    description: "Items that showcase and preserve the rich cultural heritage of the Ryukyu Kingdom."
  },
  {
    id: "3",
    name: "Botanical & Tropical",
    slug: "botanical",
    description: "Featuring patterns and materials from Ishigaki's lush subtropical vegetation and flowers."
  },
  {
    id: "4",
    name: "Sustainable & Eco-Friendly",
    slug: "sustainable",
    description: "Products made with environmental consciousness, using upcycled materials and sustainable practices."
  },
  {
    id: "5",
    name: "Beach & Coastal",
    slug: "beach",
    description: "Inspired by Ishigaki's white sand beaches, shells, and coastal elements."
  },
  {
    id: "6",
    name: "Local Traditions & Crafts",
    slug: "craft",
    description: "Highlighting traditional crafting techniques unique to Okinawa and Yaeyama Islands."
  }
];

export async function getThemes(): Promise<Theme[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return themes;
}

export async function getTheme(slug: string): Promise<Theme | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));
  return themes.find((theme) => theme.slug === slug) || null;
}