import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import ParallaxBand from '../components/ParallaxBand';
import SectionIntro from '../components/SectionIntro';
import { products } from '../data/products';
import { brand } from '../data/site';

export default function Home() {
  return (
    <PageTransition>
      <section className="hero-section">
        <div className="hero-copy">
          <div className="line-eyebrow"><span /> Est. 2021 · Bakı, Azərbaycan</div>
          <h1>One Beanora <em>is never enough.</em></h1>
          <p>{brand.location}nda yerləşən specialty kofe məkanımız — hər fincan, bir hekayədir.</p>
          <div className="hero-actions">
            <Link className="primary-button" to="/products">Menyunu aç</Link>
            <Link className="outline-button" to="/about">Bizim hekayə</Link>
          </div>
          <div className="stats-grid">
            <div><b>230</b><span>Post</span></div>
            <div><b>6.4K</b><span>Follower</span></div>
            <div><b>6</b><span>İl</span></div>
            <div><b><Star size={23} fill="currentColor" /> 4.9</b><span>Reytinq</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <span className="giant-letter">B</span>
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85" alt="Beanora interior coffee" />
          <div className="floating-note">Specialty roast · daily fresh</div>
        </div>
      </section>

      <section className="content-section">
        <SectionIntro eyebrow="Signature" title="Sakit, zərif və yadda qalan dadlar" text="Klassik reseptlər, premium təqdimat və rahat interyer atmosferi." />
        <div className="product-grid">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <ParallaxBand
        image="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85"
        title="İnteryer sadədir, amma hissi uzun qalır."
        text="Krem tonlar, taxta detallar, sakit işıq və təzə qəhvə qoxusu."
      />
    </PageTransition>
  );
}
