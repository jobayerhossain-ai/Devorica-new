import { useTranslation } from 'react-i18next';
import { Reveal, TeamCard, CTASection } from '../components/Cards';
import AnimatedCounter from '../components/AnimatedCounter';

const TEAM = [
  { name: 'Jobayer', role: 'Founder & Lead Developer', bio: 'Full-stack developer and creative director with a focus on Laravel, React, and premium UI design.', avatarColor: '#E85002' },
  // {/* PLACEHOLDER: add real team members */}
];

const VALUES = [
  {
    icon: (
      <svg className="w-8 h-8 text-brand-orange" viewBox="0 0 32 32">
        <path fill="#ff6e00" d="M28 17H18a2.003 2.003 0 0 0-2 2v6a2.003 2.003 0 0 0 2 2h4v-2h-4v-6h10v6h-2.535l-2.594 3.89L24.535 30l2-3H28a2.003 2.003 0 0 0 2-2v-6a2.003 2.003 0 0 0-2-2M8.667 24.109l.861-.862a.83.83 0 0 1 .899-.184l1.05.42a.83.83 0 0 1 .523.773v1.908a.833.833 0 0 1-.879.834c-7.354-.457-8.84-6.686-9.115-9.072A.832.832 0 0 1 2.834 17h1.874a.83.83 0 0 1 .774.524l.42 1.05a.83.83 0 0 1-.184.898l-.862.861a4.53 4.53 0 0 0 3.81 3.776M21 9h7v2h-7zm0-4h9v2h-9zm-4 1l-3 2.2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.8l3 2.2ZM4 12V6h8v6Z"/>
      </svg>
    ),
    key: 'value1'
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="#ff4e00" stroke="#ff5109">
        <path fill="#ff4e00" d="M28 2h-5v2h5v24h-5v2h5c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 18.52c0-4.62-3.78-5.14-6.82-5.56c-3.31-.46-5.18-.86-5.18-3.71c0-2.39 2.51-3.24 4.65-3.24c2.32 0 4.14.86 5.57 2.63l1.56-1.26C21.26 7.5 19.32 6.41 17 6.1V3h-2v3.02c-3.62.22-6 2.26-6 5.22c0 4.73 3.83 5.26 6.91 5.69c3.25.45 5.09.84 5.09 3.58c0 3.03-3.13 3.48-5 3.48c-3.43 0-4.88-.96-6.22-2.63l-1.56 1.26c1.77 2.19 3.73 3.17 6.78 3.34V29h2v-3.04c3.73-.3 6-2.33 6-5.44" stroke="#ff5109"/>
        <path fill="#ff4e00" d="M4 4h5V2H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h5v-2H4z" stroke="#ff5109"/>
      </svg>
    ),
    key: 'value2'
  },
  { icon: '⚡', key: 'value3' },
  { icon: '✦',  key: 'value4' },
];

export default function About() {
  const { t } = useTranslation();
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-dark py-16 md:py-24 border-b border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow mb-4"><span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />About</p>
            <h1 className="font-heading text-white text-[clamp(2.25rem,6vw,5.5rem)] mb-6">
              {t('aboutPage.heroHeading')} <span className="accent-word">{t('aboutPage.heroHeadingAccent')}</span>
            </h1>
            <p className="text-brand-lightGray text-lg max-w-2xl leading-relaxed">{t('aboutPage.heroSubtext')}</p>
          </Reveal>
        </div>
      </section>

      {/* Story + Mission */}
      <section className="section-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="font-heading text-black text-2xl sm:text-3xl mb-5">{t('aboutPage.storyHeading')}</h2>
            <p className="text-brand-gray leading-relaxed">{t('aboutPage.storyBody')}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-black text-2xl sm:text-3xl mb-5">{t('aboutPage.missionHeading')}</h2>
            <p className="text-brand-gray leading-relaxed">{t('aboutPage.missionBody')}</p>
            <blockquote className="mt-6 border-l-4 border-brand-orange pl-4 text-black font-heading text-xl italic">
              "Agency-grade design, without agency-grade price tags."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-16 md:py-20 border-t border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow mb-3"><span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />{t('aboutPage.valuesEyebrow')}</p>
            <h2 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl mb-12">{t('aboutPage.valuesHeading')}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon, key }, i) => (
              <Reveal key={key} delay={i * 0.1}>
                <div className="card-dark p-7 h-full">
                  <div className="text-3xl mb-5">{icon}</div>
                  <h3 className="font-heading text-white text-lg mb-3">{t(`aboutPage.${key}Title`)}</h3>
                  <p className="text-brand-lightGray text-sm leading-relaxed">{t(`aboutPage.${key}Desc`)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow mb-3"><span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />{t('aboutPage.teamEyebrow')}</p>
            <h2 className="font-heading text-black text-3xl sm:text-4xl md:text-5xl mb-4">
              {t('aboutPage.teamHeading')} <span className="accent-word">{t('aboutPage.teamHeadingAccent')}</span>
            </h2>
            <p className="text-brand-gray max-w-xl mb-12">{t('aboutPage.teamSubtext')}</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((m, i) => <TeamCard key={m.name} {...m} delay={i * 0.1} />)}
            {/* {/* PLACEHOLDER: add real team member cards */}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section-dark py-12 md:py-16 border-t border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-8 text-center"><span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />{t('aboutPage.statsEyebrow')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { target: 4, suffix: '+', label: 'Years Active' },
              { target: 150, suffix: '+', label: 'Projects Delivered' },
              { target: 98, suffix: '%', label: 'Client Satisfaction' },
              { target: 12, suffix: '+', label: 'Industries Served' },
            ].map(({ target, suffix, label }) => (
              <div key={label} className="bg-brand-darkGray/20 p-4 border border-brand-darkGray/50 sm:border-none">
                {/* {/* PLACEHOLDER: replace with real client-supplied stat */}
                <div className="font-heading text-brand-orange text-5xl mb-2">
                  <AnimatedCounter target={target} suffix={suffix} />
                </div>
                <p className="text-brand-lightGray text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to Start?"
        heading="Let's Build Something"
        headingAccent="Great Together."
        subtext="Agency-grade work, accessible pricing. Let's talk about your project."
        ctaLabel="Book a Consultation"
      />
    </main>
  );
}
