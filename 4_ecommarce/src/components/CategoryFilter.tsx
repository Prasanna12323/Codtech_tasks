import { motion } from "framer-motion";
import { categories, Category } from "@/data/products";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selected === category ? "default" : "outline"}
          size="sm"
          onClick={() => onSelect(category)}
          className={`relative flex-shrink-0 transition-all ${
            selected === category
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          }`}
        >
          {category}
          {selected === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 rounded-md bg-primary -z-10"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </Button>
      ))}
    </div>
  );
}
