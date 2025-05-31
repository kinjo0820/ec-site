import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCreator, getAllCreatorIds } from "@/lib/data/creators"; // getAllCreatorIds を追加
import { getProductsByCreator } from "@/lib/data/products";
import { ProductCard } from "@/components/product-card";

// --- generateStaticParams をここに追加 ---
// この関数は、静的に生成すべきすべてのクリエイターIDをNext.jsに伝えます。
export async function generateStaticParams() {
  // getCreatorIds 関数を使って、利用可能なすべてのクリエイターIDを取得します。
  // この関数は、あなたのデータ層（ここでは '@/lib/data/creators'）に実装が必要です。
  const creatorIds = await getAllCreatorIds(); 

  // パスパラメータのオブジェクトの配列として返します。
  // 各オブジェクトは { id: 'some-creator-id' } の形式である必要があります。
  return creatorIds.map((id) => ({
    id: id,
  }));
}
// --- generateStaticParams ここまで ---


export default async function CreatorPage({ params }: { params: { id: string } }) {
  const creator = await getCreator(params.id);
  
  if (!creator) {
    return notFound();
  }
  
  const products = await getProductsByCreator(creator.id);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Creator Profile */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={creator.image}
              fill
              alt={creator.name}
              className="object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2">{creator.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{creator.profile}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {creator.specialties.map((specialty, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-primary/20 bg-primary/10 text-primary"
                >
                  {specialty}
                </span>
              ))}
            </div>
            
            <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
              <p className="text-lg">{creator.bio}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Creator Story */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Journey & Inspiration</h2>
        <div className="prose prose-slate dark:prose-invert mx-auto">
          <p className="text-lg leading-relaxed">{creator.story}</p>
        </div>
      </section>
      
      {/* Workspace Gallery */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">The Workshop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creator.workspaceImages.map((image, idx) => (
            <div key={idx} className="relative h-80 rounded-lg overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Creator's Products */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Creations by {creator.name}
        </h2>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              No products available at the moment.
            </p>
            <Link 
              href="/products" 
              className="text-primary hover:underline"
            >
              Browse all products →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}