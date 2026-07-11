import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal, ServiceCard, TestimonialCard, CaseStudyCard, StatCard, CTASection } from '../components/Cards';
import Marquee from '../components/Marquee';
import AnimatedCounter from '../components/AnimatedCounter';

const AbstractGraphic = lazy(() => import('../components/AbstractGraphic'));

const MARQUEE_TAGS = ['Web Development', 'UI/UX Design', 'Branding', 'SEO', 'E-commerce', 'Mobile Apps', 'Laravel', 'React', 'Flutter'];

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      {/* ───── HERO ───── */}
      <section className="relative min-h-screen bg-black flex items-center overflow-hidden pt-20">
        {/* Background gradient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-2/3 h-full opacity-20"
            style={{ background: 'radial-gradient(ellipse at 80% 40%, #C10801 0%, #F16001 35%, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="w-2 h-2 bg-brand-orange" />
              <span className="text-brand-lightGray text-sm">{t('hero.tagline')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-white text-[clamp(2.25rem,6vw,5.5rem)] leading-[1.02] mb-6"
            >
              {t('hero.headline1')}<br />
              <span className="accent-word">{t('hero.headline1Accent')}</span>
            </motion.h1>

            {/* Numbered service tags */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
            >
              {['01', '02', '03', '04'].map(n => (
                <span key={n} className="text-xs">
                  <span className="text-brand-orange font-bold">#{n}</span>{' '}
                  <span className="text-brand-lightGray">{t(`numberedServices.${n}`)}</span>
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-brand-lightGray text-lg leading-relaxed mb-10 max-w-xl"
            >
              {t('hero.subtext')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link to="/contact" className="btn-primary justify-center text-center">{t('hero.cta')} →</Link>
              <Link to="/services" className="btn-secondary justify-center text-center">{t('hero.ctaSecondary')}</Link>
            </motion.div>

            {/* Stat badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full">
              {[
                { target: 150, suffix: '+', label: t('hero.statBadge1Label') },
                { target: 98, suffix: '%', label: t('hero.statBadge2Label') },
              ].map(({ target, suffix, label }) => (
                <div key={label} className="glass-card px-5 py-3 text-center sm:text-left">
                  {/* {/* PLACEHOLDER: replace with real client-supplied stat */}
                  <div className="font-heading text-brand-orange text-2xl">
                    <AnimatedCounter target={target} suffix={suffix} />
                  </div>
                  <p className="text-brand-lightGray text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D hero graphic */}
          <Suspense fallback={<div className="h-[280px] sm:h-[380px] lg:h-[620px] bg-brand-gradient-radial opacity-40" />}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
              className="h-[280px] sm:h-[380px] lg:h-[620px]"
            >
              <AbstractGraphic variant="hero" className="w-full h-full" />
            </motion.div>
          </Suspense>
        </div>

        {/* Partners strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-brand-darkGray py-4">
          <p className="text-center text-brand-lightGray text-xs mb-3 uppercase tracking-widest">{t('hero.partnersLabel')}</p>
          <Marquee items={['bikkhipto.com', 'easysubbd.com', 'bayloz.com', 'Partner Brand', 'Client Co.', 'Trusted Brand']} />
        </div>
      </section>

      {/* ───── MEET THE MINDS ───── */}
      <section className="section-dark py-16 md:py-24 border-t border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D avatar */}
          <Suspense fallback={<div className="h-[260px] sm:h-96 lg:h-[480px] bg-brand-gradient opacity-20" />}>
            <AbstractGraphic variant="avatar" className="h-[260px] sm:h-96 lg:h-[480px]" avatarColor="#E85002" />
          </Suspense>
          {/* Right: copy */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4">
                <span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />
                {t('meetMinds.eyebrow')}
              </p>
              <h2 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl mb-6">{t('meetMinds.heading')}</h2>
              <p className="text-brand-lightGray text-base leading-relaxed mb-8">{t('meetMinds.body')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-dark p-5">
                  <p className="text-brand-lightGray text-xs uppercase tracking-widest mb-3">{t('meetMinds.trustedPartners')}</p>
                  <div className="space-y-1">
                    {['bikkhipto.com', 'easysubbd.com', 'bayloz.com'].map(p => (
                      <p key={p} className="text-white text-sm">{p}</p>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary text-xs py-2.5 px-4 mt-5 justify-center text-center w-full sm:w-auto inline-flex">{t('meetMinds.bookCall')} →</Link>
                </div>
                <div className="bg-brand-orange p-5 flex flex-col justify-between">
                  <p className="text-white/70 text-xs uppercase tracking-widest">{t('meetMinds.factCard')}</p>
                  {/* {/* PLACEHOLDER: replace with real client-supplied stat */}
                  <p className="font-heading text-white text-4xl mt-3 sm:mt-0">150+</p>
                  <p className="text-white/80 text-sm mt-2 sm:mt-0">Projects delivered since 2022.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── HIDDEN COST ───── */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000 0%, #1a0000 50%, #000 100%)' }}>
        <div className="absolute inset-0 bg-brand-gradient opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />
              {t('hiddenCost.eyebrow')}
            </p>
            <h2 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl mb-6">
              {t('hiddenCost.heading')} <span className="accent-word">{t('hiddenCost.headingAccent')}</span>
            </h2>
            <p className="text-brand-lightGray text-base leading-relaxed">{t('hiddenCost.body')}</p>
          </Reveal>
          <Suspense fallback={null}>
            <AbstractGraphic variant="diamond" className="h-64 md:h-80" />
          </Suspense>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p className="eyebrow mb-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />
                  {t('services.eyebrow')}
                </p>
                <h2 className="font-heading text-black text-3xl sm:text-4xl md:text-5xl">
                  {t('services.heading')} <span className="accent-word">{t('services.headingAccent')}</span>
                </h2>
              </div>
              <Link to="/services" className="text-brand-orange text-sm font-semibold hover:underline py-2">{t('services.exploreAll')} →</Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <img src="/icon-webdev.png" className="w-14 h-14 object-contain" alt="Web Development" />, title: t('services.card1.title'), subtitle: t('services.card1.subtitle'), desc: t('services.card1.desc'), delay: 0 },
              { icon: <img src="/icon-uiux.png" className="w-14 h-14 object-contain" alt="UI/UX Design" />, title: t('services.card2.title'), subtitle: t('services.card2.subtitle'), desc: t('services.card2.desc'), delay: 0.1 },
              { icon: <img src="/icon-branding.png" className="w-10 h-10 object-contain" alt="Branding & Identity" />, title: t('services.card3.title'), subtitle: t('services.card3.subtitle'), desc: t('services.card3.desc'), delay: 0.2 },
              { icon: <img src="/icon-digital-strategy.png" className="w-10 h-10 object-contain" alt="Digital Strategy & Growth" />, title: t('services.card4.title'), subtitle: t('services.card4.subtitle'), desc: t('services.card4.desc'), delay: 0.3 },
            ].map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <Reveal>
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-brand-lightGray/30 pt-8">
              <p className="text-brand-gray font-semibold text-center sm:text-left">{t('services.talkExpert')}</p>
              <Link to="/contact" className="btn-primary justify-center w-full sm:w-auto">{t('hero.cta')} →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="section-dark py-16 md:py-24 border-t border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />
              {t('impact.eyebrow')}
            </p>
            <h2 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl mb-12">
              {t('impact.heading')} <span className="accent-word">{t('impact.headingAccent')}</span>
            </h2>
          </Reveal>
          {/* Grid supports 4–8 cards gracefully */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <TestimonialCard name={t('impact.testimonial1.name')} source={t('impact.testimonial1.source')} quote={t('impact.testimonial1.quote')} delay={0} />
            <TestimonialCard name={t('impact.testimonial2.name')} source={t('impact.testimonial2.source')} quote={t('impact.testimonial2.quote')} highlight delay={0.1} />
            <TestimonialCard name={t('impact.testimonial3.name')} source={t('impact.testimonial3.source')} quote={t('impact.testimonial3.quote')} delay={0.2} />
            {/* {/* PLACEHOLDER: additional testimonials from client - drop more <TestimonialCard> here */}
          </div>
        </div>
      </section>

      {/* ───── BARRIERS ───── */}
      <section className="section-dark py-16 md:py-24 border-t border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Suspense fallback={null}>
            <AbstractGraphic variant="barrier" className="h-[240px] sm:h-80" />
          </Suspense>
          <Reveal>
            <p className="eyebrow mb-4">
              <span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />
              {t('barriers.eyebrow')}
            </p>
            <h2 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl mb-6">
              {t('barriers.heading')} <span className="accent-word">{t('barriers.headingAccent')}</span>
            </h2>
            <p className="text-brand-lightGray text-base leading-relaxed mb-10">{t('barriers.body')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { target: 150, suffix: '+', label: t('barriers.stat1Label') },
                { target: 98, suffix: '%', label: t('barriers.stat2Label') },
                { target: 12, suffix: '+', label: t('barriers.stat3Label') },
              ].map(({ target, suffix, label }) => (
                <div key={label} className="text-center bg-brand-darkGray/30 p-4 border border-brand-darkGray/50 sm:border-none">
                  {/* {/* PLACEHOLDER: replace with real client-supplied stat */}
                  <div className="font-heading text-brand-orange text-4xl">
                    <AnimatedCounter target={target} suffix={suffix} />
                  </div>
                  <p className="text-brand-lightGray text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── PROCESS ───── */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow mb-3">
              <span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />
              {t('process.eyebrow')}
            </p>
            <h2 className="font-heading text-black text-3xl sm:text-4xl md:text-5xl mb-12">
              {t('process.heading')} <span className="accent-word">{t('process.headingAccent')}</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { num: '01', title: t('process.step1Title'), desc: t('process.step1Desc') },
              { num: '02', title: t('process.step2Title'), desc: t('process.step2Desc') },
              { num: '03', title: t('process.step3Title'), desc: t('process.step3Desc') },
            ].map(({ num, title, desc }, i) => (
              <Reveal key={num} delay={i * 0.1}>
                <div className="card-dark p-7">
                  <span className="text-brand-orange font-heading text-4xl font-bold">#{num}</span>
                  <h3 className="font-heading text-white text-xl mt-4 mb-3">{title}</h3>
                  <p className="text-brand-lightGray text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="flex flex-wrap gap-4 justify-center">
              {[t('process.badge1'), t('process.badge2'), t('process.badge3')].map(b => (
                <span key={b} className="border border-brand-lightGray/30 text-brand-gray text-xs px-4 py-2 uppercase tracking-widest">
                  ✓ {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── MARQUEE ───── */}
      <div className="border-y border-brand-darkGray bg-black py-5 overflow-hidden">
        <Marquee items={MARQUEE_TAGS} />
      </div>

      {/* ───── CASE STUDIES ───── */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p className="eyebrow mb-3">
                  <span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />
                  {t('caseStudies.eyebrow')}
                </p>
                <h2 className="font-heading text-black text-3xl sm:text-4xl md:text-5xl">
                  {t('caseStudies.heading')} <span className="accent-word">{t('caseStudies.headingAccent')}</span>
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CaseStudyCard name={t('caseStudies.project1.name')} desc={t('caseStudies.project1.desc')} href="bikkhipto.com" delay={0} />
            <CaseStudyCard name={t('caseStudies.project2.name')} desc={t('caseStudies.project2.desc')} href="easysubbd.com" delay={0.1} />
            <CaseStudyCard name={t('caseStudies.project3.name')} desc={t('caseStudies.project3.desc')} href="bayloz.com" delay={0.2} />
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <CTASection
        eyebrow={t('finalCta.eyebrow')}
        heading={t('finalCta.heading')}
        headingAccent={t('finalCta.headingAccent')}
        subtext={t('finalCta.subtext')}
        ctaLabel={t('finalCta.cta')}
        secondaryLabel={t('finalCta.ctaSecondary')}
        secondaryLink="/services"
      />
    </main>
  );
}
