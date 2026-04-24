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
                  <img className="cart-item-image" src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{formatPrice(item.price)} / ədəd</p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-control" aria-label={`${item.name} sayı`}>
                      <button type="button" onClick={() => changeQuantity(item.id, item.quantity - 1)} aria-label="Sayını azalt"><Minus size={15} /></button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => changeQuantity(item.id, item.quantity + 1)} aria-label="Sayını artır"><Plus size={15} /></button>
                    </div>
                    <strong className="cart-item-total">{formatPrice(item.price * item.quantity)}</strong>
                    <button className="remove-button" type="button" onClick={() => removeFromCart(item.id)} aria-label="Məhsulu səbətdən sil"><Trash2 size={18} /></button>
                  </div>
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
