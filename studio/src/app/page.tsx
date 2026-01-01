import HeroSection from '@/components/cine-enroll/hero-section';
import InstitutionSection from '@/components/cine-enroll/institution-section';
import PricingGridSection from '@/components/cine-enroll/pricing-grid-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';
import PremiumFooter from '@/components/cine-enroll/premium-footer';

export default function Home() {
  return (
    <div className="bg-white">

      {/* HERO - Nouveau design institutionnel */}
      <HeroSection />

      {/* ACADÉMIE - Section présentation */}
      <InstitutionSection />

      {/* TARIFS - Grille des programmes */}
      <PricingGridSection />

      {/* GALERIE - Photos de formations */}
      <PhotoGallery />

      {/* FOOTER - Informations de contact */}
      <PremiumFooter />
    </div>
  );
}
