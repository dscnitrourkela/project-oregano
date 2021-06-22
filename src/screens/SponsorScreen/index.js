import Nav from '../../components/nav';
import Footer from '../../components/footer';
import SponsorsSection from './SponsorsSection';
import PastSponsorsSection from './PastSponsorsSection';
import PrizesSection from '../LandingScreen/PrizesSection';
import SpeakerSection from '../LandingScreen/SpeakerSection';
import TracksSection from '../LandingScreen/TracksSection';
import WorkshopSection from '../LandingScreen/WorkshopSection';

const color = '#f6f6f6';

const SponsorScreen = () => {
  return (
    <>
      <Nav color={color} dark />
      <SpeakerSection />
      <WorkshopSection />
      <TracksSection />
      <PrizesSection />
      <SponsorsSection />
      <PastSponsorsSection />

      <Footer dark />
    </>
  );
};

export default SponsorScreen;
