import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../api';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Header';
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="product-detail-container">
        <div className="product-detail-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h2>{product.title}</h2>
            <p className="product-desc">{product.description}</p>
            <h3 className="product-price">${product.price}</h3>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
