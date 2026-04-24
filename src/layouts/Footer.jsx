import InstagramIcon from '../components/InstagramIcon';
import { brand } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span className="footer-logo">{brand.name}</span>
        <p>{brand.tagline}</p>
      </div>
      <div>
        <strong>Əlaqə</strong>
        <p>{brand.location}</p>
        <p>{brand.phone}</p>
      </div>
      <div>
        <strong>Sosial</strong>
        <p className="social-row"><InstagramIcon /> @beanora.coffee</p>
      </div>
    </footer>
  );
}
