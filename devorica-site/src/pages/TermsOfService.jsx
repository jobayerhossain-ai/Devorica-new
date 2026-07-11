import { useTranslation } from 'react-i18next';

export default function TermsOfService() {
  const { t } = useTranslation();
  return (
    <main className="section-dark pt-20 md:pt-28 pb-12 md:pb-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-white text-5xl mb-3">{t('termsPage.heading')}</h1>
        <p className="text-brand-lightGray text-sm mb-12">{t('termsPage.lastUpdated')}</p>
        {/* {/* PLACEHOLDER: have a lawyer review these terms before publishing */}
        {/* {/* PLACEHOLDER: insert business registration number if applicable */}
        <div className="space-y-8 text-brand-lightGray text-sm leading-relaxed">
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">1. Service Scope</h2>
            <p>Devorica provides web design, web development, branding, and digital strategy services as detailed in project proposals or service agreements. The scope of work is defined in writing prior to project commencement.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">2. Payment Terms</h2>
            <p>A deposit (typically 50%) is required before work begins. The remaining balance is due upon project delivery. Accepted payment methods: <strong>bKash, Nagad, Bank transfer, PayPal, Stripe</strong>. Late payments may result in project suspension.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">3. Revisions Policy</h2>
            <p>Each project tier includes a defined number of revision rounds (see our pricing page). Additional revisions beyond the included rounds are billed at our standard hourly rate, agreed in advance.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">4. Intellectual Property</h2>
            <p>Upon receipt of final payment, all design files and deliverables become the property of the client. Devorica retains the right to display work in its portfolio unless explicitly requested otherwise in writing.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">5. Liability</h2>
            <p>Devorica's liability is limited to the total fees paid for the specific project. We are not liable for indirect, incidental, or consequential damages arising from use of our deliverables.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">6. Governing Law</h2>
            <p>These terms are governed by the laws of Bangladesh. Any disputes will be resolved under the jurisdiction of Bangladeshi courts.</p>
          </section>
          <section>
            <h2 className="font-heading text-white text-2xl mb-3">7. Contact</h2>
            <p>Questions about these terms: <a href="mailto:support@devorica.com" className="text-brand-orange hover:underline">support@devorica.com</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
