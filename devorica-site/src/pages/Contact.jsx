import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../components/Cards';

const FAQ_KEYS = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5'];

function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-darkGray">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-heading text-white text-lg">{question}</span>
        <span className={`text-brand-orange text-2xl transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <p className="text-brand-lightGray text-sm leading-relaxed pb-5">{answer}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', budget: '', message: '', hp: '' });

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.hp) return; // honeypot triggered
    setStatus('sending');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      const res = await fetch('/contact.php', { method: 'POST', body: fd });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-dark py-16 md:py-24 border-b border-brand-darkGray">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow mb-4"><span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />Contact</p>
            <h1 className="font-heading text-white text-[clamp(2.25rem,6vw,5rem)] mb-4">
              {t('contactPage.heroHeading')} <span className="accent-word">{t('contactPage.heroHeadingAccent')}</span>
            </h1>
            <p className="text-brand-lightGray text-lg max-w-xl">{t('contactPage.heroSubtext')}</p>
          </Reveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <Reveal>
            <form id="form" onSubmit={submit} className="space-y-5">
              {/* Honeypot */}
              <input type="text" name="hp" value={form.hp} onChange={set('hp')} className="hidden" tabIndex={-1} aria-hidden="true" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-brand-lightGray text-xs uppercase tracking-widest block mb-2">{t('contactPage.formName')} *</label>
                  <input required value={form.name} onChange={set('name')} type="text"
                    className="w-full bg-brand-darkGray border border-brand-gray text-white px-4 py-3 text-sm focus:border-brand-orange outline-none" />
                </div>
                <div>
                  <label className="text-brand-lightGray text-xs uppercase tracking-widest block mb-2">{t('contactPage.formEmail')} *</label>
                  <input required value={form.email} onChange={set('email')} type="email"
                    className="w-full bg-brand-darkGray border border-brand-gray text-white px-4 py-3 text-sm focus:border-brand-orange outline-none" />
                </div>
              </div>

              <div>
                <label className="text-brand-lightGray text-xs uppercase tracking-widest block mb-2">{t('contactPage.formPhone')}</label>
                <input value={form.phone} onChange={set('phone')} type="tel"
                  className="w-full bg-brand-darkGray border border-brand-gray text-white px-4 py-3 text-sm focus:border-brand-orange outline-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-brand-lightGray text-xs uppercase tracking-widest block mb-2">{t('contactPage.formProjectType')}</label>
                  <select value={form.projectType} onChange={set('projectType')}
                    className="w-full bg-brand-darkGray border border-brand-gray text-white px-4 py-3 text-sm focus:border-brand-orange outline-none">
                    <option value="">Select type</option>
                    {Object.entries(t('contactPage.projectTypes', { returnObjects: true })).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-brand-lightGray text-xs uppercase tracking-widest block mb-2">{t('contactPage.formBudget')}</label>
                  <select value={form.budget} onChange={set('budget')}
                    className="w-full bg-brand-darkGray border border-brand-gray text-white px-4 py-3 text-sm focus:border-brand-orange outline-none">
                    <option value="">Select range</option>
                    {Object.entries(t('contactPage.budgetRanges', { returnObjects: true })).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-brand-lightGray text-xs uppercase tracking-widest block mb-2">{t('contactPage.formMessage')} *</label>
                <textarea required value={form.message} onChange={set('message')} rows={5}
                  className="w-full bg-brand-darkGray border border-brand-gray text-white px-4 py-3 text-sm focus:border-brand-orange outline-none resize-none" />
              </div>

              {status === 'success' && (
                <div className="bg-brand-orange/10 border border-brand-orange text-white text-sm p-4">
                  {t('contactPage.formSuccess')}
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-900/30 border border-red-600 text-red-400 text-sm p-4">
                  {t('contactPage.formError')}
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center py-4">
                {status === 'sending' ? 'Sending…' : t('contactPage.formSubmit')} →
              </button>
            </form>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              {/* Info card */}
              <div className="card-dark p-8 space-y-5">
                {[
                  { label: t('contactPage.infoEmail'), value: 'support@devorica.com', href: 'mailto:support@devorica.com' },
                  { label: t('contactPage.infoPhone'), value: '01619504428', href: 'tel:+8801619504428' },
                  { label: t('contactPage.infoAddress'), value: 'Manikpur, Senbag, Noakhali, Bangladesh', href: null },
                  { label: t('contactPage.infoHours'), value: t('contactPage.hoursValue'), href: null },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-brand-lightGray text-xs uppercase tracking-widest mb-1">{label}</p>
                    {href
                      ? <a href={href} className="text-white text-sm hover:text-brand-orange transition-colors">{value}</a>
                      : <p className="text-white text-sm">{value}</p>
                    }
                  </div>
                ))}
                <a
                  href="https://wa.me/8801619504428"
                  target="_blank" rel="noreferrer"
                  className="btn-primary w-full justify-center mt-4"
                >
                  {t('contactPage.whatsappBtn')} →
                </a>
              </div>

              {/* Google Maps embed */}
              <div className="overflow-hidden" style={{ height: 240 }}>
                <iframe
                  title="Devorica location - Manikpur, Senbag, Noakhali"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d536.7388494863105!2d91.21094162985403!3d23.016679705873024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37549fe73338359d%3A0xbdcfb0b1a4de8bf3!2sManikpur!5e1!3m2!1sen!2sbd!4v1783930007783!5m2!1sen!2sbd"
                  width="100%" height="240"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark py-16 md:py-20 border-t border-brand-darkGray">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow mb-4"><span className="w-1.5 h-1.5 bg-brand-orange inline-block mr-2" />{t('contactPage.faqEyebrow')}</p>
            <h2 className="font-heading text-white text-3xl sm:text-4xl mb-10">
              {t('contactPage.faqHeading')} <span className="accent-word">{t('contactPage.faqHeadingAccent')}</span>
            </h2>
          </Reveal>
          {FAQ_KEYS.map((key) => (
            <Accordion key={key} question={t(`contactPage.${key}Q`)} answer={t(`contactPage.${key}A`)} />
          ))}
        </div>
      </section>
    </main>
  );
}
