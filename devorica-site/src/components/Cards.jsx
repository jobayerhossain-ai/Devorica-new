import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';

/* ── Section reveal wrapper ── */
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Service Card ── */
export function ServiceCard({ title, subtitle, desc, icon = '⚡', delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="card-dark p-8 group cursor-pointer h-full flex flex-col">
        <div className="flex items-center justify-start mb-6">
          {icon}
        </div>
        <p className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-2">{subtitle}</p>
        <h3 className="font-heading text-white text-2xl mb-3">{title}</h3>
        <p className="text-brand-lightGray text-sm leading-relaxed flex-1">{desc}</p>
        <span className="mt-6 py-2.5 text-brand-orange text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Read More →
        </span>
      </div>
    </Reveal>
  );
}

/* ── Stat Card ── */
export function StatCard({ target, suffix = '', label, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="card-dark p-6 text-center">
        {/* {/* PLACEHOLDER: replace with real client-supplied stat */}
        <div className="font-heading text-brand-orange text-5xl font-bold mb-2">
          <AnimatedCounter target={target} suffix={suffix} />
        </div>
        <p className="text-brand-lightGray text-sm">{label}</p>
      </div>
    </Reveal>
  );
}

/* ── Testimonial Card ── */
export function TestimonialCard({ name, source, quote, highlight = false, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className={`p-7 h-full flex flex-col justify-between ${highlight ? 'bg-brand-orange' : 'card-dark'}`}>
        <div className="flex mb-3 gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={highlight ? 'text-white' : 'text-brand-orange'}>★</span>
          ))}
        </div>
        <p className={`text-sm leading-relaxed flex-1 mb-6 italic ${highlight ? 'text-white/90' : 'text-brand-lightGray'}`}>
          "{quote}"
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className={`font-semibold text-sm ${highlight ? 'text-white' : 'text-white'}`}>{name}</p>
            <p className={`text-xs mt-0.5 ${highlight ? 'text-white/70' : 'text-brand-lightGray'}`}>{source}</p>
          </div>
          <span className={`text-xs px-2 py-1 border ${highlight ? 'border-white/40 text-white/70' : 'border-brand-darkGray text-brand-lightGray'}`}>
            fb
          </span>
        </div>
      </div>
    </Reveal>
  );
}

/* ── Case Study Card ── */
export function CaseStudyCard({ name, desc, href, delay = 0 }) {
  let logoNode = null;

  if (href.includes('bikkhipto.com')) {
    logoNode = (
      <img src="/bikkhipto-logo-white.webp" className="max-h-12 max-w-[85%] object-contain" alt="Bikkhipto Logo" />
    );
  } else if (href.includes('easysubbd.com')) {
    logoNode = (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 512 512" className="w-10 h-10 rounded-xl shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="logoBg" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stop-color="#001489" />
              <stop offset="100%" stop-color="#000214" />
            </radialGradient>
          </defs>
          <rect width="512" height="512" fill="url(#logoBg)" />
          <path d="M390 96 L256 96 A 160 160 0 0 0 256 416 L390 416 L390 316 L196 316 L196 286 L330 286 L330 226 L196 226 L196 196 L390 196 Z" fill="#ffffff" />
        </svg>
        <span className="font-heading text-white text-2xl font-bold tracking-tight">EasySub</span>
      </div>
    );
  } else if (href.includes('bayloz.com')) {
    logoNode = (
      <img src="/bayloz-logo.jpg" className="max-h-12 max-w-[85%] object-contain" alt="Bayloz Logo" />
    );
  } else {
    logoNode = (
      <span className="font-heading text-brand-orange text-xl">{name.split('.')[0].toUpperCase()}</span>
    );
  }

  return (
    <Reveal delay={delay}>
      <div className="card-light p-7 h-full flex flex-col">
        <span className="eyebrow mb-4 block">CASE STUDY</span>
        <div className="h-32 bg-gradient-to-br from-black to-brand-darkGray mb-5 flex items-center justify-center">
          {logoNode}
        </div>
        <h3 className="font-heading text-black text-xl mb-2">{name}</h3>
        <p className="text-brand-gray text-sm leading-relaxed flex-1 mb-5">
          {desc}
        </p>
        <a href={`https://${href}`} target="_blank" rel="noreferrer"
          className="py-2.5 text-brand-orange text-sm font-medium hover:underline inline-flex items-center gap-1">
          Visit Live Site →
        </a>
      </div>
    </Reveal>
  );
}

/* ── Pricing Card ── */
export function PricingCard({ tier, price, usdPrice, currency, features, cta, popular, ctaLink = '/contact' }) {
  return (
    <div className={`relative p-8 flex flex-col h-full transition-all duration-300 ${
      popular
        ? 'bg-brand-darkGray border-2 border-brand-orange shadow-[0_0_30px_rgba(232,80,2,0.25)]'
        : 'card-dark'
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-brand-orange text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="font-heading text-white text-2xl mb-1">{tier}</h3>
      <div className="mt-4 mb-1">
        {/* {/* PLACEHOLDER: confirm real pricing in BDT */}
        <span className="font-heading text-brand-orange text-4xl">
          {currency === 'BDT' ? '৳' : '$'}{price ?? 'X,XXX'}
        </span>
        {price && currency === 'BDT' && usdPrice && (
          <span className="text-brand-lightGray text-sm ml-2">≈ ${usdPrice} USD</span>
        )}
        {price && currency === 'USD' && (
          <span className="text-brand-lightGray text-sm ml-2">per project</span>
        )}
      </div>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-brand-lightGray">
            <span className="text-brand-orange mt-0.5 flex-shrink-0">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link to={ctaLink} className={`mt-8 text-center py-3 text-sm font-semibold transition-all ${
        popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'
      }`}>
        {cta}
      </Link>
    </div>
  );
}

/* ── Team Card ── */
export function TeamCard({ name, role, bio, avatarColor = '#E85002', delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="card-dark p-7 text-center">
        {/* Abstract geometric avatar */}
        <div className="w-20 h-20 mx-auto mb-5 relative">
          <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${avatarColor} 0%, #111 100%)` }}>
            <div className="absolute inset-2 border border-white/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-white text-2xl">
              {name.charAt(0)}
            </div>
          </div>
        </div>
        <h3 className="font-heading text-white text-xl mb-1">{name}</h3>
        <p className="text-brand-orange text-xs uppercase tracking-widest mb-3">{role}</p>
        <p className="text-brand-lightGray text-sm leading-relaxed">{bio}</p>
      </div>
    </Reveal>
  );
}

/* ── CTA Section ── */
export function CTASection({ eyebrow, heading, headingAccent, subtext, ctaLabel, ctaLink = '/contact', secondaryLabel, secondaryLink }) {
  return (
    <section className="section-dark py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient opacity-15 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <p className="eyebrow mb-5">
            <span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />
            {eyebrow}
          </p>
          <h2 className="font-heading text-white text-5xl md:text-6xl mb-6">
            {heading} <span className="accent-word">{headingAccent}</span>
          </h2>
          <p className="text-brand-lightGray text-lg mb-10 max-w-2xl mx-auto">{subtext}</p>
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4">
            <Link to={ctaLink} className="btn-primary justify-center text-center">{ctaLabel} →</Link>
            {secondaryLabel && (
              <Link to={secondaryLink || '/services'} className="btn-secondary justify-center text-center">{secondaryLabel}</Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
