import React from 'react';
import PageTransition from '../components/PageTransition';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

export default function Checkout() {
  const { items, total, clearCart } = useCart();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Fake ödəniş tamamlandı. Təşəkkürlər!');
    clearCart();
  };

  return (
    <PageTransition>
      <section className="page-hero small-hero">
        <span className="eyebrow">Checkout</span>
        <h1>Ödəniş məlumatları</h1>
      </section>
      <section className="checkout-section">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>Ad Soyad<input required placeholder="Nurlan Askarov" /></label>
          <label>Telefon<input required placeholder="+994 50 000 00 00" /></label>
          <label>Çatdırılma ünvanı<input required placeholder="Bakı, Azərbaycan" /></label>
          <label>Kart nömrəsi<input required placeholder="4242 4242 4242 4242" /></label>
          <div className="form-row">
            <label>Tarix<input required placeholder="12/28" /></label>
            <label>CVV<input required placeholder="123" /></label>
          </div>
          <button className="primary-button" type="submit">Fake ödənişi tamamla</button>
        </form>
        <aside className="checkout-summary">
          <span className="eyebrow">Order</span>
          <h2>Sifariş</h2>
          {items.length === 0 ? <p>Səbət boşdur.</p> : items.map((item) => (
            <div className="summary-line" key={item.id}><span>{item.name} × {item.quantity}</span><b>{formatPrice(item.price * item.quantity)}</b></div>
          ))}
          <div className="summary-total"><span>Toplam</span><b>{formatPrice(total)}</b></div>
        </aside>
      </section>
    </PageTransition>
  );
}
