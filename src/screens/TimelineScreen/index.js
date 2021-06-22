import Nav from '../../components/nav';
import Footer from '../../components/footer';
import TimelineScreen from './TimelineScreen'

const color = '#f6f6f6';

const GalleryScreen = () => {
  return (
    <>
      <Nav color={color} dark />

      <TimelineScreen />

      <Footer dark />
    </>
  );
};

export default GalleryScreen;
