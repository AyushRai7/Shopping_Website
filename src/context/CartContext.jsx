import { createContext, useContext, useState } from 'react';
export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find(i => i.id === item.id);
      return exists ? prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i) : [...prev, { ...item, qty: 1 }];
    });
  };
  const updateQty = (id, qty) => setCart((prev) => prev.map(i => i.id === id ? { ...i, qty } : i));
  const removeFromCart = (id) => setCart((prev) => prev.filter(i => i.id !== id));
  const clearCart = () => setCart([]);
  return <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};
