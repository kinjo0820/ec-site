// app/products/page.tsx

export const dynamic = 'force-dynamic'; 
// これを追加することで、このページは常にサーバーサイドで動的にレンダリングされます。

import { Suspense } from "react";
import { getProducts } from "@/lib/data/products";
import { getCategories } from "@/lib/data/categories";
import { getThemes } from "@/lib/data/themes";
import { ProductCard } from "@/components/product-card";
import { ProductsFilter } from "@/components/products-filter";
import { ProductsLoading } from "@/components/products-loading";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const categoryParam = searchParams.category as string | undefined;
  const themeParam = searchParams.theme as string | undefined;
  const sortParam = searchParams.sort as string | undefined;
  
  const products = await getProducts();
  const categories = await getCategories();
  const themes = await getThemes();
  
  // Filter products based on URL parameters
  let filteredProducts = [...products];
  
  if (categoryParam) {
    filteredProducts = filteredProducts.filter(product => product.category === categoryParam);
  }
  
  if (themeParam) {
    filteredProducts = filteredProducts.filter(product => 
      product.themes.some(theme => theme === themeParam)
    );
  }
  
  // Sort products
  if (sortParam) {
    switch (sortParam) {
      case 'price-low-high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      default:
        // Default sort is newest first
        filteredProducts.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
  } else {
    // Default sort is newest first
    filteredProducts.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        {/* Filters sidebar */}
        <aside className="w-full md:w-64 lg:w-80 flex-shrink-0">
          <ProductsFilter 
            categories={categories}
            themes={themes}
            selectedCategory={categoryParam}
            selectedTheme={themeParam}
            sortOption={sortParam || 'newest'}
          />
        </aside>
        
        {/* Products grid */}
        <div className="flex-1">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">
              {categoryParam 
                ? categories.find(c => c.slug === categoryParam)?.name || 'Products' 
                : 'All Products'}
            </h1>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </header>
          
          <Suspense fallback={<ProductsLoading />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
              
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-12 text-center">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}