import { Skeleton } from "@/components/ui/skeleton";

export function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="border rounded-lg overflow-hidden">
          <Skeleton className="aspect-square w-full" />
          <div className="p-4 space-y-3">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}