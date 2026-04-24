import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartToast() {
  const { notices, closeNotice } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="toast-stack" role="status" aria-live="polite" aria-atomic="true">
      <AnimatePresence initial={false}>
        {notices.map((notice) => (
          <motion.article
            className="cart-toast"
            key={notice.id}
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <img src={notice.image} alt="" />
            <div className="cart-toast-copy">
              <span><CheckCircle2 size={16} /> {notice.title}</span>
              <p>{notice.message}</p>
            </div>
            <button type="button" onClick={() => closeNotice(notice.id)} aria-label="Bildirişi bağla">
              <X size={16} />
            </button>
          </motion.article>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
