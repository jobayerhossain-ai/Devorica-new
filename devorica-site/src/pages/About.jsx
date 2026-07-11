import { useTranslation } from 'react-i18next';
import { Reveal, TeamCard, CTASection } from '../components/Cards';
import AnimatedCounter from '../components/AnimatedCounter';

const TEAM = [
  { name: 'Jobayer', role: 'Founder & Lead Developer', bio: 'Full-stack developer and creative director with a focus on Laravel, React, and premium UI design.', avatarColor: '#E85002' },
  // {/* PLACEHOLDER: add real team members */}
];

const VALUES = [
  { icon: '💬', key: 'value1' },
  { icon: '💎', key: 'value2' },
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
