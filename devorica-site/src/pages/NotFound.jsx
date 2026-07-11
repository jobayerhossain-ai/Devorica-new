import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <main className="section-dark min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 bg-brand-orange flex items-center justify-center mx-auto mb-8">
          {/* {/* PLACEHOLDER: replace with real Devorica icon mark /assets/logo-icon.svg */}
          <span className="font-heading text-white text-2xl">D</span>
        </div>
        <h1 className="font-heading text-white text-[clamp(5rem,15vw,10rem)] leading-none mb-6">
          {t('notFound.heading')}
        </h1>
        <p className="text-brand-lightGray text-lg mb-10">{t('notFound.subtext')}</p>
        <Link to="/" className="btn-primary">{t('notFound.cta')} →</Link>
      </div>
    </main>
  );
}
