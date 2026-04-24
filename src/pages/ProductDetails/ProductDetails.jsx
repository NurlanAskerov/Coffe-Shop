import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ShoppingBag, Star } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import ProductCard from '../../components/ProductCard';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { formatPrice } from '../../utils/formatPrice';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <PageTransition>
        <section className="page-hero small-hero">
          <h1>Məhsul tapılmadı</h1>
          <Link className="outline-button" to="/products">Məhsullara qayıt</Link>
        </section>
      </PageTransition>
    );
  }

  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <PageTransition>
      <section className="detail-section">
        <div className="detail-gallery">
          <img className="detail-main-image" src={product.image} alt={product.name} />
          <div className="detail-thumbs">
            {product.gallery.map((image) => <img key={image} src={image} alt={product.name} />)}
          </div>
        </div>
        <div className="detail-copy">
          <Link className="back-link" to="/products"><ChevronLeft size={18} /> Məhsullara qayıt</Link>
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="rating-row"><Star size={18} fill="currentColor" /> {product.rating} · Specialty coffee</div>
          <p>{product.longDescription}</p>
          <strong className="detail-price">{formatPrice(product.price)}</strong>
          <button className="primary-button detail-button" onClick={() => addToCart(product)}><ShoppingBag size={18} /> Səbətə əlavə et</button>
        </div>
      </section>
      <section className="content-section">
        <span className="eyebrow">You may also like</span>
        <h2 className="section-title">Oxşar seçimlər</h2>
        <div className="product-grid three">
          {related.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
    </PageTransition>
  );
}
