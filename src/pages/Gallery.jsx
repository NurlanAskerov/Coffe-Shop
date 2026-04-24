import PageTransition from '../components/PageTransition';
import SectionIntro from '../components/SectionIntro';
import { galleryImages } from '../data/gallery';

export default function Gallery() {
  return (
    <PageTransition>
      <section className="page-hero gallery-hero">
        <span className="eyebrow light">Gallery</span>
        <h1>Beanora atmosferi</h1>
        <p>İnteryer, fincanlar, masa detallar və sakit coffee house estetikası.</p>
      </section>
      <section className="content-section">
        <SectionIntro eyebrow="Visual mood" title="Şəkillərlə brand hissi" />
        <div className="masonry-gallery">
          {galleryImages.map((image, index) => <img className={index % 3 === 0 ? 'tall' : ''} key={image} src={image} alt="Beanora gallery" />)}
        </div>
      </section>
    </PageTransition>
  );
}
