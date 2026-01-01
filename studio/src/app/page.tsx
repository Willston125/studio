import HeroSection from '@/components/cine-enroll/hero-section';
import PhotoGallery from '@/components/cine-enroll/photo-gallery';
import PremiumFooter from '@/components/cine-enroll/premium-footer';
import { FilmGrainOverlay } from '@/components/ui/cinema-effects';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Cinema Film Grain Overlay */}
      <FilmGrainOverlay />

      {/* HERO - Conservé */}
      <div className="mt-32 mb-20">
        <HeroSection />
      </div>

      {/* PHOTO GALLERY - Conservé (En Immersion sur les Tournages) */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          <PhotoGallery />
        </div>
      </div>

      {/* FOOTER PREMIUM - Nouveau */}
      <PremiumFooter />
    </div>
  );
}
