import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-img" />
      </Link>
      <div className="card-info">
        <h3 className="card-title">{product.title}</h3>
        <span className="card-price">${product.price}</span>
      </div>
      <button
        className="add-btn"
        onClick={() => {
          addToCart(product);
          toast.success("Added to cart!");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
