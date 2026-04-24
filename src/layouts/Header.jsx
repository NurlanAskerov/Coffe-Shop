import { NavLink, Link } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { brand } from '../data/site';
import { useCart } from '../context/CartContext';

const navItems = [
  { to: '/', label: 'Ana səhifə' },
  { to: '/about', label: 'Haqqımızda' },
  { to: '/products', label: 'Məhsullar' },
  { to: '/gallery', label: 'Galeriya' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="site-header">
      <Link to="/" className="brand-mark" onClick={() => setOpen(false)}>
        <span>{brand.initials}</span>
        <strong>{brand.name}</strong>
      </Link>

      <nav className="desktop-nav">
        {navItems.map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
      </nav>

      <Link to="/cart" className="cart-link">
        <ShoppingBag size={19} /> Səbət <b>{count}</b>
      </Link>

      <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="mobile-nav">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
          <NavLink to="/cart" onClick={() => setOpen(false)}>Səbət</NavLink>
        </div>
      )}
    </header>
  );
}
