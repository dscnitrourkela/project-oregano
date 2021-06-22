import Nav from '../../components/nav';
import Footer from '../../components/footer';

import AboutSection from './AboutSection';
import ThemesSection from './ThemesSection';
import SponsorsSection from './SponsorsSection';
import FAQSection from './FAQSection';
import HeroSection from './HeroSection';
import GallerySection from './GallerySection';

const color = '#f6f6f6';

const LandingScreen = () => {
  return (
    <>
      <Nav color={color} dark />

      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <SponsorsSection />
      {/* <SpeakerSection />
      <WorkshopSection />
      <TracksSection />
      <PrizesSection /> */}
      <GallerySection />
      <FAQSection />

      <Footer dark />
    </>
  );
};

export default LandingScreen;
