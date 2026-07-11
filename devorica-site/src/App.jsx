import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { CookieBanner, ExitIntentPopup, BackToTop } from './components/Overlays';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';

/* ── Scroll to top on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const { i18n } = useTranslation();

  /* Sync lang class on body */
  useEffect(() => {
    document.documentElement.classList.toggle('lang-bn', i18n.language === 'bn');
  }, [i18n.language]);

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Navbar />

      {/* Tawk.to live chat - embedded site-wide */}
      {/* {/* PLACEHOLDER: insert real Tawk.to property ID once account is created */}
      {/* To activate: create a free account at tawk.to, get your property ID, then replace TAWK_PROPERTY_ID below */}
      {/* <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/TAWK_PROPERTY_ID/1xxxxxxxx';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
        })();
      </script> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <BackToTop />
      <CookieBanner />
      <ExitIntentPopup />
    </>
  );
}
