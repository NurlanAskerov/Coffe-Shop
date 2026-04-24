import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatPrice';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = (event) => {
    event.preventDefault();
    addToCart(product);
  };

  return (
    <Link className="product-card" to={`/products/${product.slug}`}>
      <div className="product-image-wrap">
        <img className="product-image product-image-primary" src={product.image} alt={product.name} />
        <img className="product-image product-image-secondary" src={product.hoverImage} alt={`${product.name} alternate`} />
        <span className="product-badge">{product.category}</span>
      </div>
      <div className="product-card-body">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-card-footer">
          <strong>{formatPrice(product.price)}</strong>
          <button onClick={handleAdd} className="icon-button" aria-label="Səbətə əlavə et">
            <ShoppingBag size={17} />
          </button>
        </div>
        <span className="product-link">Ətraflı bax <ArrowUpRight size={14} /></span>
      </div>
    </Link>
  );
}
