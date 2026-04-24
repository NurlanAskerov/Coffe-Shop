import React from 'react';
export default function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
