import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${name} has been ${
        isWishlisted ? "removed from" : "added to"
      } your wishlist.`,
    });
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={handleToggleWishlist}
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>
      </div>
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
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
          <h3 className="font-medium text-shop-primary mb-2 hover:text-shop-accent transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-shop-primary">
            ${price.toFixed(2)}
          </span>
          <Button
            size="sm"
            className="bg-shop-accent hover:bg-shop-accent/90"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;