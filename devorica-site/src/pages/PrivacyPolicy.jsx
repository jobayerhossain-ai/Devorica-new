import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <main className="section-dark pt-20 md:pt-28 pb-12 md:pb-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-white text-5xl mb-3">{t('privacyPage.heading')}</h1>
        <p className="text-brand-lightGray text-sm mb-12">{t('privacyPage.lastUpdated')}</p>
        {/* {/* PLACEHOLDER: have a lawyer review this privacy policy before publishing */}
        {/* {/* PLACEHOLDER: insert business registration number if applicable */}
        <div className="prose-invert space-y-8 text-brand-lightGray text-sm leading-relaxed">
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">1. Introduction</h2>
            <p>Devorica ("we", "our", "us") operates <strong>devorica.com</strong>. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly: your name, email address, phone number, and project details submitted via our contact form. We also collect usage data through analytics tools.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">3. Third-Party Services</h2>
            <p>We use the following third-party services that may collect data:</p>
            <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
              <li><strong>Google Analytics</strong> - website usage analytics</li>
              <li><strong>Facebook Pixel</strong> - advertising performance tracking</li>
              <li><strong>Tawk.to</strong> - live chat support</li>
            </ul>
            <p className="mt-3">Each service has its own privacy policy. By using our website, you acknowledge this data may be collected.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">4. Cookies</h2>
            <p>We use cookies for analytics, advertising, and live chat functionality. You may decline non-essential cookies via the cookie consent banner on first visit. Essential cookies required for site operation are always active.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">5. Data Retention</h2>
            <p>We retain contact form submissions for up to 12 months. You may request deletion of your data at any time by emailing <a href="mailto:support@devorica.com" className="text-brand-orange hover:underline">support@devorica.com</a>.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:support@devorica.com" className="text-brand-orange hover:underline">support@devorica.com</a>.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">7. Contact</h2>
            <p>For privacy-related questions: <a href="mailto:support@devorica.com" className="text-brand-orange hover:underline">support@devorica.com</a><br />Address: Manikpur, Senbag, Noakhali, Bangladesh</p>
          </section>
        </div>
      </div>
    </main>
  );
}
