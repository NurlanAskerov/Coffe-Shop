import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <section className="page-hero small-hero">
        <span className="eyebrow">404</span>
        <h1>Səhifə tapılmadı</h1>
        <Link className="primary-button" to="/">Ana səhifəyə qayıt</Link>
      </section>
    </PageTransition>
  );
}
