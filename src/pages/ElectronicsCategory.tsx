import { useState } from "react";
import { Computer, Smartphone, Tv, Headphones, Camera, Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Temporary mock data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart TV 55\"",
    price: 699.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
  },
  {
    id: 3,
    name: "Smartphone Pro",
    price: 899.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 4,
    name: "Digital Camera",
    price: 449.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
];

const categories = [
  { name: "Computers", icon: Computer },
  { name: "Phones", icon: Smartphone },
  { name: "TVs", icon: Tv },
  { name: "Audio", icon: Headphones },
  { name: "Cameras", icon: Camera },
];

const ElectronicsCategory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-shop-primary mb-2">Electronics</h1>
          <p className="text-shop-secondary">
            Discover the latest in technology and gadgets
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search electronics..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>
                  Choose categories to filter the products
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    className="w-full justify-start gap-2"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category.name ? null : category.name
                      )
                    }
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Category Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="flex flex-col items-center gap-2 p-4 h-auto"
              onClick={() => setSelectedCategory(category.name)}
            >
              <category.icon className="h-6 w-6" />
              <span className="text-sm">{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsCategory;