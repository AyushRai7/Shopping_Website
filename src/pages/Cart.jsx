import Navbar from '../components/Header';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty!");
    } else {
      toast.success("Order placed successfully!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="cart-container">
          <h2 className="cart-title">🛒 Your Cart</h2>
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty!</p>
          ) : (
            <>
              <div className="cart-grid">
                {cart.map((item) => (
                  <div className="cart-card" key={item.id}>
                    <img src={item.image} alt={item.title} className="cart-image" />
                    <h3 className="cart-item-title">{item.title}</h3>
                    <p className="cart-price">${item.price}</p>
                    <div className="cart-qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <button className="cart-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
                <button className="place-order-btn" onClick={handlePlaceOrder}>
                  Place Order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
