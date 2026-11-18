import { useEffect, useState } from 'react';
import { WA } from '../wa';
import { WhatsAppIcon } from './FloatingWhatsApp';

const links = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#automacao', label: 'IA & Automação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#processo', label: 'Como funciona' },
  { href: '#clientes', label: 'Clientes' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled || menuOpen ? ' scrolled' : ''}`}>
      <div className="wrap nav">
        <a href="#inicio" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo-300.webp" alt="WS Engenharia Digital" className="logo-img" />
        </a>
        <nav className="links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a className="btn btn-primary" href="#contato">
            Falar com especialista ↗
          </a>
        </nav>
        <button
          className={`menuBtn${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobileMenu${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="btn btn-wa"
          href={WA.geral}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <WhatsAppIcon size={16} /> Falar com especialista
        </a>
      </div>
    </header>
  );
}
