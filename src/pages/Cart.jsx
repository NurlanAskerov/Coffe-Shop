import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

export default function Cart() {
  const { items, total, changeQuantity, removeFromCart } = useCart();

  return (
    <PageTransition>
      <section className="page-hero small-hero">
        <span className="eyebrow">Səbət</span>
        <h1>Sifariş səbəti</h1>
      </section>
      <section className="cart-section">
        {items.length === 0 ? (
          <div className="empty-state">
            <h2>Səbətin boşdur</h2>
            <p>Menyudan sevdiyin içkiləri əlavə edə bilərsən.</p>
            <Link className="primary-button" to="/products">Menyunu aç</Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{formatPrice(item.price)}</p>
                  </div>
                  <div className="quantity-control">
                    <button onClick={() => changeQuantity(item.id, item.quantity - 1)}><Minus size={15} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, item.quantity + 1)}><Plus size={15} /></button>
                  </div>
                  <strong>{formatPrice(item.price * item.quantity)}</strong>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}><Trash2 size={18} /></button>
                </article>
              ))}
            </div>
            <aside className="cart-summary">
              <span className="eyebrow">Summary</span>
              <h2>Toplam: {formatPrice(total)}</h2>
              <Link className="primary-button" to="/checkout">Ödənişə keç</Link>
            </aside>
          </>
        )}
      </section>
    </PageTransition>
  );
}
