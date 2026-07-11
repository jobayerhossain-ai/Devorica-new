import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Cookie Banner ── */
export function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('devorica_cookie_consent')) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem('devorica_cookie_consent', 'accepted'); setVisible(false); };
  const decline = () => { localStorage.setItem('devorica_cookie_consent', 'declined'); setVisible(false); };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-brand-darkGray border border-brand-gray p-5 shadow-xl"
        >
          <p className="text-brand-lightGray text-sm mb-4">{t('cookie.text')}</p>
          <div className="flex gap-3">
            <button onClick={accept} className="btn-primary text-sm py-2 px-5">{t('cookie.accept')}</button>
            <button onClick={decline} className="btn-secondary text-sm py-2 px-4">{t('cookie.decline')}</button>
            <Link to="/privacy" className="text-brand-orange text-sm self-center hover:underline">{t('cookie.learnMore')}</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Exit Intent Popup ── */
export function ExitIntentPopup() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const shown = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('devorica_exit_shown')) return;
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (isMobile) return;

    const onMouseLeave = (e) => {
      if (e.clientY <= 10 && !sessionStorage.getItem('devorica_exit_shown')) {
        setVisible(true);
        sessionStorage.setItem('devorica_exit_shown', '1');
        document.removeEventListener('mouseleave', onMouseLeave);
      }
    };
    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[60]"
            onClick={() => setVisible(false)}
          />
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-brand-darkGray border border-brand-gray p-10 w-full max-w-lg shadow-2xl"
          >
            <button
              onClick={() => setVisible(false)}
              className="absolute top-4 right-5 text-brand-lightGray hover:text-white text-xl"
              aria-label="Close"
            >×</button>
            <p className="eyebrow mb-3">Free Offer</p>
            <h2 className="font-heading text-white text-3xl mb-3">{t('exitIntent.heading')}</h2>
            <p className="text-brand-lightGray text-sm mb-6">{t('exitIntent.subtext')}</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder={t('exitIntent.placeholder')}
                className="flex-1 bg-black border border-brand-gray text-white text-sm px-4 py-3 focus:border-brand-orange outline-none"
              />
              <button className="btn-primary text-sm py-3 px-5">{t('exitIntent.cta')}</button>
            </div>
            <button onClick={() => setVisible(false)} className="mt-4 text-brand-lightGray text-xs hover:text-white">
              {t('exitIntent.close')}
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Back to Top ── */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40 w-11 h-11 bg-brand-orange text-white flex items-center justify-center hover:bg-orange-700 transition-colors shadow-lg"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
