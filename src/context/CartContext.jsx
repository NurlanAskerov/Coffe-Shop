import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setItems((current) => current.filter((item) => item.id !== productId));
  };

  const changeQuantity = (productId, quantity) => {
    if (quantity < 1) return removeFromCart(productId);
    setItems((current) => current.map((item) => item.id === productId ? { ...item, quantity } : item));
  };

  const clearCart = () => setItems([]);

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, changeQuantity, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
