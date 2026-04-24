import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import SectionIntro from '../components/SectionIntro';
import { products } from '../data/products';

export default function Products() {
  return (
    <PageTransition>
      <section className="page-hero products-hero">
        <span className="eyebrow">Menu</span>
        <h1>Beanora menyusu</h1>
        <p>Fake məhsullar, real premium vizual hiss. Kartlarda hover zamanı şəkil dəyişir və kliklə detail səhifəsinə keçilir.</p>
      </section>
      <section className="content-section">
        <SectionIntro eyebrow="Coffee selection" title="Seçilmiş içkilər" />
        <div className="product-grid four">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </PageTransition>
  );
}
