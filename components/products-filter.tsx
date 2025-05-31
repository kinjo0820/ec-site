"use client";

import { useState, useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Category, Theme } from "@/lib/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";

interface ProductsFilterProps {
  categories: Category[];
  themes: Theme[];
  selectedCategory?: string;
  selectedTheme?: string;
  sortOption: string;
}

export function ProductsFilter({
  categories,
  themes,
  selectedCategory,
  selectedTheme,
  sortOption,
}: ProductsFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [expanded, setExpanded] = useState<string[]>([
    "categories",
    "themes",
    "sort",
  ]);

  const createQueryString = (
    name: string,
    value: string | null
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value === null) {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    
    return params.toString();
  };

  const handleCategoryChange = (value: string) => {
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString("category", value)}`
      );
    });
  };

  const handleThemeChange = (value: string) => {
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString("theme", value)}`
      );
    });
  };

  const handleSortChange = (value: string) => {
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString("sort", value)}`
      );
    });
  };

  const handleClearFilters = () => {
    startTransition(() => {
      router.push(pathname);
    });
  };

  const hasActiveFilters = selectedCategory || selectedTheme;

  return (
    <div className="space-y-6 sticky top-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Filters</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="h-8 px-2 text-xs"
            disabled={isPending}
          >
            <X className="mr-1 h-4 w-4" />
            Clear all
          </Button>
        )}
      </div>

      <Accordion
        type="multiple"
        value={expanded}
        onValueChange={setExpanded}
        className="w-full"
      >
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              value={selectedCategory || ""}
              onValueChange={handleCategoryChange}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="" id="all-categories" />
                <Label htmlFor="all-categories">All Categories</Label>
              </div>
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={category.slug}
                    id={`category-${category.id}`}
                    disabled={isPending}
                  />
                  <Label htmlFor={`category-${category.id}`}>
                    {category.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="themes">
          <AccordionTrigger>Themes</AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              value={selectedTheme || ""}
              onValueChange={handleThemeChange}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="" id="all-themes" />
                <Label htmlFor="all-themes">All Themes</Label>
              </div>
              {themes.map((theme) => (
                <div key={theme.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={theme.slug}
                    id={`theme-${theme.id}`}
                    disabled={isPending}
                  />
                  <Label htmlFor={`theme-${theme.id}`}>{theme.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sort">
          <AccordionTrigger>Sort By</AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              value={sortOption}
              onValueChange={handleSortChange}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="newest" id="sort-newest" />
                <Label htmlFor="sort-newest">Newest</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-low-high" id="sort-price-low" />
                <Label htmlFor="sort-price-low">Price: Low to High</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="price-high-low" id="sort-price-high" />
                <Label htmlFor="sort-price-high">Price: High to Low</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator className="my-4" />

      <div className="text-sm text-muted-foreground">
        <p className="mb-2">Need help finding the perfect item?</p>
        <Button asChild variant="link" className="p-0 h-auto text-sm">
          <Link href="/contact">Contact our team</Link>
        </Button>
      </div>
    </div>
  );
}