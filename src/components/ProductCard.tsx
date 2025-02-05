import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-sm text-shop-secondary mb-1">{category}</p>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-shop-primary mb-2 hover:text-shop-accent transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-shop-primary">
            ${price.toFixed(2)}
          </span>
          <Button size="sm" className="bg-shop-accent hover:bg-shop-accent/90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;