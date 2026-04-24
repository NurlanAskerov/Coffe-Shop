import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function AppLayout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
