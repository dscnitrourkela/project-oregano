<<<<<<< HEAD
import React from 'react';
import { Footer } from '../components/marginals/Footer/Footer';

export default function Playground() {
  return (
    <div>
      <Footer />
    </div>
  );
}
=======
import React, { useState, useEffect } from 'react';

// Libraries
import Helmet from 'react-helmet';

import HeroSection from '../components/HeroSection/HeroSection';
import { Container } from '../components/shared/SectionContainer';
import Layout from '../components/shared/Layout';
import AboutSection from '../components/AboutUs/About';
import SponsorSection from '../components/Sponsor/Sponsor';
import FAQ from '../components/Faq/Faq';
import TimelineSection from '../components/TimelineSection/Timeline';
import { Footer } from '../components/marginals/Footer/Footer';
import Prizes from '../components/Prizes/Prizes';

const Homepage = ({ location }) => {
  const isHome = location?.pathname === '/';
  const [loading, setLoading] = useState(isHome);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            block: id === 'sponsors' ? 'nearest' : 'center',
          });
          el.focus();
        }
        setLoading(true);
      }, 0);
    }
  }, [location.hash, loading]);

  return (
    <>
      <Helmet>
        <script
          type='text/javascript'
          id='hs-script-loader'
          async
          defer
          src='//js.hs-scripts.com/8898157.js'
        />
      </Helmet>

      <Layout location={location}>
        <HeroSection />
        <Container>
          <AboutSection />
          <SponsorSection />
          <Prizes />
          <TimelineSection />
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
};
export default Homepage;

// import React, { useState } from 'react';
// import NavBar from '../components/marginals/Navbar/navbar';
// import { MenuContext } from '../components/marginals/Navbar/MenuContext';

// export default function Playground() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenuOpen = () => (menuOpen ? setMenuOpen(false) : setMenuOpen(true));
//   return (
//     <>
//       <MenuContext.Provider value={{ menuOpen, toggleMenuOpen }}>
//         <NavBar />
//       </MenuContext.Provider>
//     </>
//   );
// }
>>>>>>> 20a2fe7f3d87618b67ac7fcdb769fd3edf67d9e8
