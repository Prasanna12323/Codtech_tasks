import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import { OfflineIndicator } from "@/components/OfflineIndicator";
import { InstallPrompt } from "@/components/InstallPrompt";
import { products, Category } from "@/data/products";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "rating">("featured");

  const filteredProducts = useMemo(() => {
    let filtered =
      selectedCategory === "All"
        ? products
        : products.filter((p) => p.category === selectedCategory);

    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "rating":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <OfflineIndicator />
      <Header />
      <Cart />
      <InstallPrompt />

      <main className="pt-16 md:pt-20">
        <Hero />

        {/* Products Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Discover our handpicked selection of premium products designed
                for your lifestyle.
              </p>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <CategoryFilter
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="text-sm bg-transparent border-none focus:outline-none cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </section>

        {/* Features Banner */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { emoji: "🚚", title: "Free Shipping", desc: "On orders over $50" },
                { emoji: "↩️", title: "Easy Returns", desc: "30-day return policy" },
                { emoji: "🔒", title: "Secure Payment", desc: "100% secure checkout" },
                { emoji: "💬", title: "24/7 Support", desc: "Dedicated support" },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <span className="text-3xl mb-2 block">{feature.emoji}</span>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-primary-foreground/80">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
