import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal, PricingCard, CTASection } from '../components/Cards';
import { useCurrencyRate } from '../hooks/useCurrencyRate';

const STACK = ['Laravel', 'Python', 'Node.js', 'React', 'TypeScript', 'Java', 'Flutter'];

export default function Services() {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState('BDT');
  const { toUSD } = useCurrencyRate();

  const PRICES = {
    starter: { bdt: 15000 },
    growth:  { bdt: 35000 },
  };

  const starterUSD = PRICES.starter.bdt ? toUSD(PRICES.starter.bdt) : null;
  const growthUSD  = PRICES.growth.bdt  ? toUSD(PRICES.growth.bdt)  : null;

  return (
    <main className="pt-20">
      {/* Hero band */}
      <section className="section-dark py-16 md:py-24 border-b border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow mb-4"><span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />Services</p>
            <h1 className="font-heading text-white text-[clamp(2.25rem,6vw,5.5rem)] mb-6">
              {t('servicesPage.heroHeading')} <span className="accent-word">{t('servicesPage.heroHeadingAccent')}</span>
            </h1>
            <p className="text-brand-lightGray text-lg max-w-2xl leading-relaxed">{t('servicesPage.heroSubtext')}</p>
          </Reveal>
        </div>
      </section>

      {/* Web Development */}
      <section className="section-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <span className="eyebrow mb-3 block">01 / Web Development</span>
            <h2 className="font-heading text-black text-3xl sm:text-4xl mb-4">{t('services.card1.subtitle')}</h2>
            <p className="text-brand-gray leading-relaxed mb-6">{t('services.card1.desc')}</p>
            <div className="mb-8">
              <p className="text-black font-semibold text-sm mb-3">Our Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {STACK.map(s => (
                  <span key={s} className="border border-brand-orange/40 text-brand-orange text-xs px-3 py-1.5">{s}</span>
                ))}
              </div>
            </div>
            <ul className="space-y-2 mb-8">
              {['Custom website & web application development','E-commerce platforms','API design & third-party integrations','Performance optimization & SEO','CMS integration & content workflows','Ongoing maintenance & support'].map(f => (
                <li key={f} className="text-brand-gray text-sm flex items-center gap-2">
                  <span className="text-brand-orange">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">{t('hero.cta')} →</Link>
          </Reveal>
          <div className="h-48 sm:h-64 bg-gradient-to-br from-black to-brand-darkGray flex items-center justify-center p-8">
            <img src="/icon-webdev.png" className="h-36 object-contain opacity-30 filter drop-shadow-[0_0_15px_rgba(232,80,2,0.2)]" alt="Web Development" />
          </div>
        </div>
      </section>

      {/* UI/UX Design */}
      <section className="section-dark py-16 md:py-20 border-t border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="h-48 sm:h-64 bg-gradient-to-br from-brand-darkGray to-black flex items-center justify-center p-8">
            <img src="/icon-uiux.png" className="h-36 object-contain opacity-30 filter drop-shadow-[0_0_15px_rgba(232,80,2,0.2)]" alt="UI/UX Design" />
          </div>
          <Reveal>
            <span className="eyebrow mb-3 block">02 / UI/UX Design</span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl mb-4">{t('services.card2.subtitle')}</h2>
            <p className="text-brand-lightGray leading-relaxed mb-6">{t('services.card2.desc')}</p>
            <ul className="space-y-2 mb-8">
              {['User research & wireframing','High-fidelity UI design','Prototyping & user testing','Design system creation','Responsive & mobile-first layouts','Conversion rate optimization'].map(f => (
                <li key={f} className="text-brand-lightGray text-sm flex items-center gap-2">
                  <span className="text-brand-orange">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">{t('hero.cta')} →</Link>
          </Reveal>
        </div>
      </section>

      {/* Branding */}
      <section className="section-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <span className="eyebrow mb-3 block">03 / Branding & Identity</span>
            <h2 className="font-heading text-black text-3xl sm:text-4xl mb-4">{t('services.card3.subtitle')}</h2>
            <p className="text-brand-gray leading-relaxed mb-6">{t('services.card3.desc')}</p>
            <ul className="space-y-2 mb-8">
              {['Logo design & icon systems','Visual identity & brand guidelines','Typography & color systems','Brand voice & messaging','Business collateral design','Social media kit'].map(f => (
                <li key={f} className="text-brand-gray text-sm flex items-center gap-2">
                  <span className="text-brand-orange">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">{t('hero.cta')} →</Link>
          </Reveal>
          <div className="h-48 sm:h-64 bg-gradient-to-br from-black to-brand-darkGray flex items-center justify-center p-8">
            <img src="/icon-branding.png" className="h-36 object-contain opacity-30 filter drop-shadow-[0_0_15px_rgba(232,80,2,0.2)]" alt="Branding & Identity" />
          </div>
        </div>
      </section>

      {/* Digital Strategy */}
      <section className="section-dark py-16 md:py-20 border-t border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="h-48 sm:h-64 bg-gradient-to-br from-brand-darkGray to-black flex items-center justify-center p-8">
            <img src="/icon-digital-strategy.png" className="h-36 object-contain opacity-30 filter drop-shadow-[0_0_15px_rgba(232,80,2,0.2)]" alt="Digital Strategy & Growth" />
          </div>
          <Reveal>
            <span className="eyebrow mb-3 block">04 / Digital Strategy & Growth</span>
            <h2 className="font-heading text-white text-3xl sm:text-4xl mb-4">{t('services.card4.subtitle')}</h2>
            <p className="text-brand-lightGray leading-relaxed mb-6">{t('services.card4.desc')}</p>
            <ul className="space-y-2 mb-8">
              {['On-page & technical SEO','Conversion rate optimization (CRO)','Analytics setup & reporting','Content strategy','Performance audits','Ongoing growth advisory'].map(f => (
                <li key={f} className="text-brand-lightGray text-sm flex items-center gap-2">
                  <span className="text-brand-orange">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">{t('hero.cta')} →</Link>
          </Reveal>
        </div>
      </section>

      {/* ───── PRICING ───── */}
      <section id="pricing" className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3"><span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />{t('servicesPage.pricingEyebrow')}</p>
              <h2 className="font-heading text-black text-3xl sm:text-4xl md:text-5xl mb-4">
                {t('servicesPage.pricingHeading')} <span className="accent-word">{t('servicesPage.pricingHeadingAccent')}</span>
              </h2>
              <p className="text-brand-gray max-w-xl mx-auto text-base">{t('servicesPage.pricingSubtext')}</p>
            </div>
            {/* BDT/USD toggle */}
            <div className="flex justify-center mb-10">
              <div className="flex border border-brand-lightGray/30 overflow-hidden">
                <button
                  onClick={() => setCurrency('BDT')}
                  className={`px-5 py-3 text-sm font-semibold transition-colors ${currency === 'BDT' ? 'bg-brand-orange text-white' : 'text-brand-gray hover:text-black'}`}
                >
                  {t('servicesPage.toggleBDT')}
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-5 py-3 text-sm font-semibold transition-colors ${currency === 'USD' ? 'bg-brand-orange text-white' : 'text-brand-gray hover:text-black'}`}
                >
                  {t('servicesPage.toggleUSD')}
                </button>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-8">
            <PricingCard
              tier={t('servicesPage.starter.name')}
              price={currency === 'BDT' ? PRICES.starter.bdt : starterUSD}
              usdPrice={starterUSD}
              currency={currency}
              features={t('servicesPage.starter.features', { returnObjects: true })}
              cta={t('servicesPage.getStarted')}
              ctaLink="/contact"
            />
            <PricingCard
              tier={t('servicesPage.growth.name')}
              price={currency === 'BDT' ? PRICES.growth.bdt : growthUSD}
              usdPrice={growthUSD}
              currency={currency}
              features={t('servicesPage.growth.features', { returnObjects: true })}
              cta={t('servicesPage.getStarted')}
              ctaLink="/contact"
              popular
            />
            <PricingCard
              tier={t('servicesPage.enterprise.name')}
              price={null}
              usdPrice={null}
              currency={currency}
              features={t('servicesPage.enterprise.features', { returnObjects: true })}
              cta={t('servicesPage.contactSales')}
              ctaLink="/contact"
            />
          </div>
          <Reveal>
            <p className="text-center text-brand-lightGray text-sm mt-8">
              {t('servicesPage.payment')}
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow={t('finalCta.eyebrow')}
        heading={t('finalCta.heading')}
        headingAccent={t('finalCta.headingAccent')}
        subtext={t('finalCta.subtext')}
        ctaLabel={t('finalCta.cta')}
      />
    </main>
  );
}
