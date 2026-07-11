import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// PLACEHOLDER: replace each '#' below with the real social media URL once supplied by client
const SOCIAL_LINKS = [
  { key: 'facebook',  href: '#' },
  { key: 'linkedin',  href: '#' },
  { key: 'instagram', href: '#' },
  { key: 'behance',   href: '#' },
];

export default function Footer() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('devorica_lang', next);
  };

  return (
    <footer className="bg-black border-t border-brand-darkGray">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand col */}
        <div className="lg:col-span-1">
          {/* {/* PLACEHOLDER: replace with real logo-white.svg */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-orange flex items-center justify-center">
              <span className="font-heading text-white text-sm font-bold">D</span>
            </div>
            <span className="font-heading text-white text-xl tracking-tight">DEVORICA</span>
          </div>
          <p className="text-brand-lightGray text-sm leading-relaxed mb-6">
            Agency-grade design, without agency-grade price tags. Since 2022.
          </p>
          <p className="text-brand-lightGray text-xs mb-1">{t('footer.emailLabel')}</p>
          <a href="mailto:support@devorica.com" className="text-white text-sm hover:text-brand-orange transition-colors">
            support@devorica.com
          </a>
          <div className="mt-4">
            <p className="text-brand-lightGray text-xs mb-1">{t('footer.whatsappLabel')}</p>
            <a href="https://wa.me/8801619504428" target="_blank" rel="noreferrer" className="text-white text-sm hover:text-brand-orange transition-colors">
              01619504428
            </a>
          </div>
          {/* Newsletter */}
          <form className="mt-6" onSubmit={e => e.preventDefault()}>
            <p className="text-brand-lightGray text-xs mb-2">{t('footer.newsletterLabel')}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className="flex-1 bg-brand-darkGray text-white text-sm px-3 py-2 border border-brand-gray focus:border-brand-orange outline-none"
              />
              <button type="submit" className="bg-brand-orange text-white text-sm px-4 py-2 hover:bg-orange-700 transition-colors">
                {t('footer.newsletterBtn')}
              </button>
            </div>
          </form>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">{t('footer.pages')}</h3>
          <ul className="space-y-3">
            {[
              { to: '/', label: t('footer.links.home') },
              { to: '/services', label: t('footer.links.services') },
              { to: '/about', label: t('footer.links.about') },
              { to: '/contact', label: t('footer.links.contact') },
            ].map(({ to, label }) => (
              <li key={to}><Link to={to} className="text-brand-lightGray text-sm hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">{t('footer.solutions')}</h3>
          <ul className="space-y-3">
            {[
              { to: '/services', label: t('footer.links.webDev') },
              { to: '/services', label: t('footer.links.uiux') },
              { to: '/services', label: t('footer.links.branding') },
              { to: '/services', label: t('footer.links.strategy') },
            ].map(({ to, label }, i) => (
              <li key={i}><Link to={to} className="text-brand-lightGray text-sm hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company + Social */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">{t('footer.company')}</h3>
          <ul className="space-y-3 mb-8">
            {[
              { to: '/about', label: t('footer.links.aboutUs') },
              { to: '/services#pricing', label: t('footer.links.pricing') },
              { to: '/privacy', label: t('footer.links.privacy') },
              { to: '/terms', label: t('footer.links.terms') },
            ].map(({ to, label }, i) => (
              <li key={i}><Link to={to} className="text-brand-lightGray text-sm hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
          <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">{t('footer.social')}</h3>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ key, href }) => (
              <a key={key} href={href} target="_blank" rel="noreferrer"
                className="w-8 h-8 border border-brand-darkGray flex items-center justify-center text-brand-lightGray hover:border-brand-orange hover:text-brand-orange transition-all text-xs font-bold uppercase"
                aria-label={t(`footer.links.${key}`)}
              >
                {key.charAt(0).toUpperCase()}
                {/* {/* PLACEHOLDER: insert real social URL for {key} */}
              </a>
            ))}
          </div>
          {/* Lang toggle */}
          <div className="mt-6">
            <button onClick={toggleLang} className="flex text-xs font-bold border border-brand-darkGray overflow-hidden" aria-label="Toggle language">
              <span className={`px-2.5 py-1.5 transition-colors ${i18n.language === 'en' ? 'bg-brand-orange text-white' : 'text-brand-lightGray'}`}>EN</span>
              <span className={`px-2.5 py-1.5 transition-colors ${i18n.language === 'bn' ? 'bg-brand-orange text-white' : 'text-brand-lightGray'}`}>BN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Large wordmark — true full-width via SVG textLength */}
      <div 
        className="border-t border-brand-darkGray w-full overflow-hidden relative"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(232, 80, 2, 0.15) 0%, rgba(193, 8, 1, 0.05) 50%, transparent 100%)'
        }}
      >
        <svg
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
          width="100%"
          aria-hidden="true"
          style={{ display: 'block', height: 'clamp(6rem, 21vw, 24rem)' }}
        >
          <motion.text
            x="0"
            y="135"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: '"Gotham Ultra", "Impact", "Arial Black", sans-serif',
              fontWeight: 900,
              fontSize: 148,
              fill: 'rgba(255, 255, 255, 0.15)',
              letterSpacing: 0,
              filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.95)) drop-shadow(0px 0px 25px rgba(232, 80, 2, 0.25))',
            }}
          >
            DEVORICA
          </motion.text>
        </svg>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-brand-lightGray text-xs border-t border-brand-darkGray/50">
        <span>{t('footer.copyright')} {t('footer.since')}</span>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.links.privacy')}</Link>
          <Link to="/terms" className="hover:text-white transition-colors">{t('footer.links.terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
