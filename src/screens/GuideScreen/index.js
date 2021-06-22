import Nav from '../../components/nav';
import Footer from '../../components/footer';

import GuideSection from './GuideSection';
const color = '#f6f6f6';

const GuideScreen = () => {
  return (
    <>
      <Nav color={color} dark />

      <GuideSection />

      <Footer dark />
    </>
  );
};

export default GuideScreen;
