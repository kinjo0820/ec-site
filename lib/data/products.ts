import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "星の砂レジンピアス (Star Sand Resin Earrings)",
    description: "Elegant earrings featuring real star sand from Ishigaki's beaches, encapsulated in crystal clear resin.",
    story: "Star sand is a natural wonder found on select beaches of Ishigaki Island. These earrings preserve the magical five-pointed star-shaped shells of foraminifera, tiny marine organisms that lived millions of years ago. Each piece contains authentic star sand collected ethically from Hoshizuna Beach, making every pair unique and connecting you directly to the mystical ocean treasures of our island.",
    price: 3800,
    category: "accessories",
    materials: ["star sand", "resin", "sterling silver"],
    themes: ["ocean", "beach", "celestial"],
    creatorId: "1",
    images: [
      "https://images.pexels.com/photos/9594042/pexels-photo-9594042.jpeg",
      "https://images.pexels.com/photos/10971870/pexels-photo-10971870.jpeg"
    ],
    featured: true,
    stock: 15,
    dimensions: "3cm drop length",
    careInstructions: "Avoid prolonged exposure to direct sunlight to preserve resin clarity. Store in the provided pouch when not in use.",
    createdAt: "2023-11-15T08:30:00Z"
  },
  {
    id: "2",
    name: "八重山ミンサー織りコースター (Yaeyama Minsa Coasters)",
    description: "Set of four handwoven coasters using traditional Yaeyama Minsa weaving techniques with indigo and natural dyes.",
    story: "Minsa weaving is a centuries-old tradition from the Yaeyama Islands, with patterns that tell stories and convey wishes. Our artisans have preserved this technique, creating these coasters with the traditional '5-4-5' pattern symbolizing eternal love ('go-yo-go' in Japanese sounds like 'forever and ever'). Made with cotton threads hand-dyed using natural indigo grown on Ishigaki Island, these coasters connect your home to our heritage.",
    price: 4200,
    category: "textiles",
    materials: ["cotton", "natural dyes", "indigo"],
    themes: ["traditional", "heritage", "indigo"],
    creatorId: "3",
    images: [
      "https://images.pexels.com/photos/6048006/pexels-photo-6048006.jpeg",
      "https://images.pexels.com/photos/6192999/pexels-photo-6192999.jpeg"
    ],
    featured: true,
    stock: 8,
    dimensions: "12cm x 12cm per coaster",
    careInstructions: "Hand wash gently with mild soap and cold water. Air dry flat. Iron on low heat if needed.",
    createdAt: "2023-10-28T14:20:00Z"
  },
  {
    id: "3",
    name: "月桃染めストール (Shell Ginger Dyed Scarf)",
    description: "Luxuriously soft cotton-silk blend scarf naturally dyed with shell ginger leaves harvested from Ishigaki Island.",
    story: "Shell ginger (gettō in Japanese) grows abundantly in Ishigaki's subtropical climate. Our artisans harvest these aromatic leaves and use traditional dyeing techniques to extract their natural pale gold color. The leaves are also known for their antibacterial properties, making this not just a beautiful accessory but also a connection to the island's natural healing traditions. Each scarf features subtle variations in color, reflecting the unique batch of leaves used in its creation.",
    price: 7800,
    category: "textiles",
    materials: ["cotton-silk blend", "shell ginger leaves"],
    themes: ["botanical", "natural dye", "sustainable"],
    creatorId: "3",
    images: [
      "https://images.pexels.com/photos/4850591/pexels-photo-4850591.jpeg",
      "https://images.pexels.com/photos/14246455/pexels-photo-14246455.jpeg"
    ],
    featured: false,
    stock: 5,
    dimensions: "180cm x 70cm",
    careInstructions: "Hand wash in cold water with gentle soap. Do not bleach. Air dry in shade to preserve natural dye colors.",
    createdAt: "2024-01-10T11:15:00Z"
  },
  {
    id: "4",
    name: "シーサー陶器 (Shisa Pottery Guardian)",
    description: "Hand-sculpted traditional Okinawan shisa guardian figure, glazed in vibrant turquoise inspired by Ishigaki's ocean.",
    story: "Shisa are traditional Ryukyuan guardian figures, often placed in pairs at the entrance of homes to ward off evil spirits. This shisa is hand-sculpted using clay sourced from Ishigaki Island and glazed in a brilliant turquoise inspired by the famous Blue Cave of Ishigaki. Each piece varies slightly in expression and details, as our artisan Yamada-san believes that each shisa develops its own character during the creation process. These guardians carry the protective spirit of our island to your home.",
    price: 6500,
    category: "pottery",
    materials: ["local clay", "turquoise glaze"],
    themes: ["traditional", "guardian", "Ryukyu culture"],
    creatorId: "2",
    images: [
      "https://images.pexels.com/photos/13259420/pexels-photo-13259420.jpeg",
      "https://images.pexels.com/photos/14037622/pexels-photo-14037622.jpeg"
    ],
    featured: true,
    stock: 10,
    dimensions: "15cm height x 12cm width",
    careInstructions: "Dust with a soft cloth. For deeper cleaning, wipe with a damp cloth. Avoid harsh chemicals.",
    createdAt: "2023-12-05T09:45:00Z"
  },
  {
    id: "5",
    name: "珊瑚礁アクリル画 (Coral Reef Acrylic Painting)",
    description: "Vibrant acrylic painting depicting the diverse coral ecosystems of Ishigaki's protected marine areas.",
    story: "Ishigaki Island is surrounded by some of Japan's most beautiful coral reefs, home to over 400 species of coral and countless marine creatures. Our artist Miyazato-san spends hours snorkeling and studying these underwater ecosystems before capturing their vibrant beauty on canvas. This painting showcases the specific coral formations found at Manta Scramble, a famous dive spot off the coast of Ishigaki where manta rays gather. Each brushstroke aims to raise awareness about coral conservation while bringing the magical underwater world of Ishigaki into your home.",
    price: 15800,
    category: "art",
    materials: ["acrylic paint", "canvas"],
    themes: ["ocean", "marine life", "conservation"],
    creatorId: "4",
    images: [
      "https://images.pexels.com/photos/7550834/pexels-photo-7550834.jpeg",
      "https://images.pexels.com/photos/7550827/pexels-photo-7550827.jpeg"
    ],
    featured: true,
    stock: 1,
    dimensions: "40cm x 50cm, gallery wrapped canvas",
    careInstructions: "Hang away from direct sunlight. Dust occasionally with a soft, dry cloth.",
    createdAt: "2024-02-20T16:30:00Z"
  },
  {
    id: "6",
    name: "黒糖キャンドル (Brown Sugar Candle)",
    description: "Hand-poured soy wax candle infused with the warm, distinctive scent of Ishigaki's famous black sugar.",
    story: "Sugarcane has been cultivated on Ishigaki Island for centuries, and the island's black sugar is renowned throughout Japan for its rich mineral content and distinctive flavor. Our candle maker Tanaka-san has created a warm, comforting scent that captures the essence of freshly made black sugar, reminiscent of warm caramel with subtle molasses notes. The candle is poured in a ceramic container made from local clay and decorated with a traditional Okinawan pattern. When lit, it brings the comforting atmosphere of an Ishigaki sugar mill into your home.",
    price: 3200,
    category: "home",
    materials: ["soy wax", "local ceramic", "natural fragrance"],
    themes: ["scented", "local tradition", "craft"],
    creatorId: "5",
    images: [
      "https://images.pexels.com/photos/7765041/pexels-photo-7765041.jpeg",
      "https://images.pexels.com/photos/5820081/pexels-photo-5820081.jpeg"
    ],
    featured: false,
    stock: 12,
    dimensions: "8cm height x 7cm diameter",
    careInstructions: "Burn for maximum 4 hours at a time. Trim wick to 1/4 inch before each use. Keep away from drafts.",
    createdAt: "2023-09-18T13:40:00Z"
  },
  {
    id: "7",
    name: "マングローブ木彫り (Mangrove Wood Carving)",
    description: "Intricate wood carving made from fallen mangrove wood, depicting the unique ecosystem of Ishigaki's mangrove forests.",
    story: "The mangrove forests of Ishigaki Island are among the northernmost mangrove ecosystems in the world, hosting a diverse range of wildlife and serving as crucial nurseries for marine species. Our carver Nakamura-san collects only fallen mangrove wood, ensuring no harm to these protected forests. This piece depicts the complex root systems of the mangroves and the birds and crabs that call them home. The natural contours of the wood determine each unique carving, making this a true collaboration between artisan and nature.",
    price: 12500,
    category: "art",
    materials: ["mangrove wood", "natural oils"],
    themes: ["nature", "ecosystem", "sustainable"],
    creatorId: "6",
    images: [
      "https://images.pexels.com/photos/11273885/pexels-photo-11273885.jpeg",
      "https://images.pexels.com/photos/6044236/pexels-photo-6044236.jpeg"
    ],
    featured: false,
    stock: 3,
    dimensions: "25cm x 18cm x 10cm",
    careInstructions: "Dust regularly with a soft cloth. Apply a small amount of beeswax once a year to maintain the finish.",
    createdAt: "2024-01-05T10:10:00Z"
  },
  {
    id: "8",
    name: "島バナナ繊維ノートブック (Island Banana Fiber Notebook)",
    description: "Handmade notebook with covers created from banana plant fibers grown on Ishigaki Island.",
    story: "Banana plants are abundant on Ishigaki, and traditionally, nothing goes to waste. After harvesting the fruit, our artisans extract fibers from the plant's trunk and leaves using ancient techniques passed down through generations. These fibers are then processed and pressed to create uniquely textured paper that is both durable and beautiful. Each notebook contains 80 pages of recycled paper and features a cover design inspired by traditional Ryukyu patterns, connecting modern sustainability with island heritage.",
    price: 2800,
    category: "stationery",
    materials: ["banana fiber", "recycled paper", "cotton thread"],
    themes: ["sustainable", "zero-waste", "traditional craft"],
    creatorId: "7",
    images: [
      "https://images.pexels.com/photos/6192226/pexels-photo-6192226.jpeg",
      "https://images.pexels.com/photos/6192227/pexels-photo-6192227.jpeg"
    ],
    featured: false,
    stock: 25,
    dimensions: "21cm x 15cm, 80 pages",
    careInstructions: "Keep dry and away from direct sunlight to preserve the natural fiber cover.",
    createdAt: "2023-11-30T15:20:00Z"
  }
];

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products;
}

export async function getProduct(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return products.find((product) => product.id === id) || null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));
  return products.filter((product) => product.featured);
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));
  return products.filter((product) => product.category === category);
}

export async function getProductsByCreator(creatorId: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));
  return products.filter((product) => product.creatorId === creatorId);
}

export async function searchProducts(query: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const lowerQuery = query.toLowerCase();
  return products.filter((product) => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.story.toLowerCase().includes(lowerQuery) ||
    product.materials.some(material => material.toLowerCase().includes(lowerQuery)) ||
    product.themes.some(theme => theme.toLowerCase().includes(lowerQuery))
  );
}