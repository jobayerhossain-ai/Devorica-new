import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('devorica_lang', next);
    document.documentElement.classList.toggle('lang-bn', next === 'bn');
  };

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-black/95 backdrop-blur-md shadow-lg shadow-black/50' : 'py-5 bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Devorica Home">
          <img src="/devorica-lodo.png" className="h-8 w-auto object-contain" alt="Devorica" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-brand-orange' : 'text-brand-lightGray hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex text-xs font-bold border border-brand-darkGray overflow-hidden"
            aria-label="Toggle language"
          >
            <span className={`px-2.5 py-1.5 transition-colors ${i18n.language === 'en' ? 'bg-brand-orange text-white' : 'text-brand-lightGray hover:text-white'}`}>EN</span>
            <span className={`px-2.5 py-1.5 transition-colors ${i18n.language === 'bn' ? 'bg-brand-orange text-white' : 'text-brand-lightGray hover:text-white'}`}>BN</span>
          </button>
          <Link to="/contact#form" className="btn-primary text-sm py-2.5 px-5">
            {t('nav.letsTalk')} →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black border-t border-brand-darkGray"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `text-base font-medium ${isActive ? 'text-brand-orange' : 'text-brand-lightGray'}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-brand-darkGray flex items-center gap-4">
                <button
                  onClick={toggleLang}
                  className="flex text-xs font-bold border border-brand-darkGray overflow-hidden"
                >
                  <span className={`px-2.5 py-1.5 ${i18n.language === 'en' ? 'bg-brand-orange text-white' : 'text-brand-lightGray'}`}>EN</span>
                  <span className={`px-2.5 py-1.5 ${i18n.language === 'bn' ? 'bg-brand-orange text-white' : 'text-brand-lightGray'}`}>BN</span>
                </button>
                <Link to="/contact#form" className="btn-primary text-sm py-2 px-4">
                  {t('nav.letsTalk')} →
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
