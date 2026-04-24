import React from 'react';
export default function ParallaxBand({ image, title, text }) {
  return (
    <section className="parallax-band" style={{ backgroundImage: `linear-gradient(rgba(20,48,35,.45), rgba(20,48,35,.45)), url(${image})` }}>
      <div>
        <span className="eyebrow light">Beanora moments</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
}
