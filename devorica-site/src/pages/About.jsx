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
      <svg className="w-10 h-10" viewBox="0 0 16 16">
        <path fill="#ff4f00" d="M8.317 8.318a4.5 4.5 0 0 1 6.365 6.364a.5.5 0 1 1-.707-.707a3.5 3.5 0 1 0-4.95 0a.5.5 0 1 1-.708.707a4.5 4.5 0 0 1 0-6.364m1.414 1.414a2.5 2.5 0 1 1 3.536 3.536a.5.5 0 0 1-.707-.708a1.5 1.5 0 1 0-2.122 0a.5.5 0 0 1-.707.708a2.5 2.5 0 0 1 0-3.536M7.258 8A5.48 5.48 0 0 0 6 11.5c0 .485.062.955.18 1.402A7 7 0 0 1 5 13c-1.175 0-2.27-.272-3.089-.77C1.091 11.73.5 10.965.5 10a2 2 0 0 1 2-2zM5 1.5A2.75 2.75 0 1 1 5 7a2.75 2.75 0 0 1 0-5.5m6.502.997a2.25 2.25 0 0 1 2.252 2.251a2.24 2.24 0 0 1-.586 1.51A5.5 5.5 0 0 0 11.5 6a5.5 5.5 0 0 0-1.667.257a2.251 2.251 0 0 1 1.669-3.76"/>
      </svg>
    ),
    key: 'value1'
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 32 32" fill="#ff4e00" stroke="#ff5109">
        <path fill="#ff4e00" d="M28 2h-5v2h5v24h-5v2h5c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 18.52c0-4.62-3.78-5.14-6.82-5.56c-3.31-.46-5.18-.86-5.18-3.71c0-2.39 2.51-3.24 4.65-3.24c2.32 0 4.14.86 5.57 2.63l1.56-1.26C21.26 7.5 19.32 6.41 17 6.1V3h-2v3.02c-3.62.22-6 2.26-6 5.22c0 4.73 3.83 5.26 6.91 5.69c3.25.45 5.09.84 5.09 3.58c0 3.03-3.13 3.48-5 3.48c-3.43 0-4.88-.96-6.22-2.63l-1.56 1.26c1.77 2.19 3.73 3.17 6.78 3.34V29h2v-3.04c3.73-.3 6-2.33 6-5.44" stroke="#ff5109"/>
        <path fill="#ff4e00" d="M4 4h5V2H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h5v-2H4z" stroke="#ff5109"/>
      </svg>
    ),
    key: 'value2'
  },
  {
    icon: (
      <svg className="w-[50px] h-[50px]" viewBox="0 0 24 24">
        <path fill="#ff3800" d="M5.1 20q-.55 0-1.012-.238t-.738-.712q-.65-1.175-1-2.437T2 14q0-2.075.788-3.9t2.137-3.175T8.1 4.788T12 4q.575 0 1.15.075t1.15.2l-1.325 1.8q-.25-.05-.487-.062T12 6Q8.65 6 6.325 8.325T4 14q0 1.05.287 2.063T5.1 18h13.775q.55-.9.825-1.925T19.975 14q0-1.65-.638-3.15T17.5 8.225l.525-2.175q1.875 1.425 2.913 3.512T21.975 14q.025 1.35-.325 2.625t-1.025 2.425q-.275.475-.737.713T18.875 20zm6.075-4.2q.8.35 1.613.038T13.85 14.7q.725-2.425 1.313-4.85t1.062-4.9q-1.575 1.975-3.062 3.975T10.225 13q-.5.725-.2 1.575t1.15 1.225m.8-1.825"/>
      </svg>
    ),
    key: 'value3'
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 32 32">
        <path fill="#ff4000" d="M7.75 2.977a1 1 0 0 0-1.638-.747C4.393 3.657 3.35 4.837 2.744 5.94C2.12 7.077 2.001 8.064 2.001 9a4 4 0 0 0 8 0c0-1.28-.626-2.23-1.116-2.974l-.144-.22c-.52-.806-.962-1.59-.99-2.829m-5.749 14.03c0-1.116.088-2.528.584-3.696A5.48 5.48 0 0 0 6.001 14.5c1.292 0 2.48-.446 3.418-1.191c.495 1.17.582 2.582.582 3.697c0 1.844-.288 4.908-.815 7.523c-.263 1.303-.595 2.55-1.006 3.494c-.203.468-.45.919-.76 1.269c-.304.344-.777.708-1.416.708c-.64 0-1.113-.364-1.417-.708c-.309-.35-.556-.8-.76-1.269c-.411-.943-.745-2.19-1.008-3.494c-.528-2.614-.818-5.679-.818-7.523M10.986 6.68A7 7 0 0 1 20.929 12H17.5a4.5 4.5 0 0 0-4.5 4.5v3.43a7 7 0 0 1-1.613-.434a49 49 0 0 1-.209 2.053a9 9 0 0 0 1.822.396V24.5a4.5 4.5 0 0 0 4.5 4.5h8a4.5 4.5 0 0 0 4.5-4.5v-8a4.5 4.5 0 0 0-4.5-4.5h-2.555A9 9 0 0 0 9.973 4.95l.027.042l.136.205c.236.353.57.855.85 1.483M25.5 14a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-8a2.5 2.5 0 0 1-2.5-2.5v-2.555A9.004 9.004 0 0 0 22.945 14zM15 19.93V16.5a2.5 2.5 0 0 1 2.5-2.5h3.43A7 7 0 0 1 15 19.93"/>
      </svg>
    ),
    key: 'value4'
  },
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
