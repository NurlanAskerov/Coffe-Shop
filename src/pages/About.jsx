import React from 'react';
import PageTransition from '../components/PageTransition';
import ParallaxBand from '../components/ParallaxBand';

export default function About() {
  return (
    <PageTransition>
      <section className="page-hero small-hero">
        <span className="eyebrow">Haqqımızda</span>
        <h1>Beanora qəhvəni gündəlik rituala çevirir.</h1>
        <p>Bizim fake hekayəmiz sadədir: Bakı şəhərinin ritmində sakit, klassik və zərif coffee house yaratmaq.</p>
      </section>
      <section className="split-section">
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1300&q=85" alt="Cafe interior" />
        <div>
          <span className="eyebrow">Our story</span>
          <h2>Hər detal fincan qədər önəmlidir.</h2>
          <p>Beanora-da menyu, interyer, qablaşdırma və servis eyni vizual dildə danışır. Məqsədimiz qonağa ağır olmayan premium hiss verməkdir.</p>
          <p>İsti işıq, yumşaq musiqi, rahat masa aralıqları və klassik serif tipografiya brand hissini tamamlayır.</p>
        </div>
      </section>
      <ParallaxBand image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85" title="Bir fincan, bir masa, bir az sakitlik." text="Beanora gündəlik qaçışın içində kiçik fasilədir." />
    </PageTransition>
  );
}
