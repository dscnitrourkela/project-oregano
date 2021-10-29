/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// Libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot, doc } from 'firebase/firestore';

// Components
import { Layout, Footer, LiveSection } from '../components';

// Firebase web config
const config = {
  type: process.env.GATSBY_TYPE,
  projectId: process.env.GATSBY_PROJECT_ID,
  privateKeyId: process.env.GATSBY_PRIVATE_KEY_ID,
  privateKey: process.env.GATSBY_PRIVATE_KEY,
  clientEmail: process.env.GATSBY_CLIENT_EMAIL,
  clientId: process.env.GATSBY_CLIENT_ID,
  authUri: process.env.GATSBY_AUTH_URI,
  tokenUri: process.env.GATSBY_TOKEN_URI,
  authProviderX509CertUrl: process.env.GATSBY_AUTH_PROVIDER_X509_CERT_URL,
  clientX509CertUrl: process.env.GATSBY_CLIENT_X509_CERT_URL,
};
const app = initializeApp(config);
const db = getFirestore(app);

const Live = () => {
  const [activeSession, setActiveSession] = useState(null);
  const [sessionDetails, setSessionDetails] = useState([]);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (app) {
      const fetchActiveSession = async () => {
        const unsub = onSnapshot(doc(db, 'activeStream', 'ZolbxvkoBNzDU1o2JDTd'), (snap) => {
          setActiveSession(snap.data());
          return Promise.resolve();
        });
      };

      const fetchSessionDetails = async () => {
        const unsub = onSnapshot(collection(db, 'livestream'), (snap) => {
          const docList = snap.docs.map((d) => d.data());
          setSessionDetails(docList);
          return Promise.resolve();
        });
      };

      const fetchData = async () => {
        await Promise.all([fetchActiveSession(), fetchSessionDetails()]);
      };

      fetchData();
    }
  }, []);

  useEffect(() => {
    function containerLoaded() {
      const container = document.getElementById('stream-container');
      if (container) {
        const { width, height } = container.getBoundingClientRect();
        setContainerDimensions({
          width,
          height,
        });
      }
    }

    containerLoaded();
  }, [activeSession]);

  return (
    <Layout>
      <LiveSection
        youtubeLiveLink={activeSession?.link}
        title={activeSession?.title}
        speaker={activeSession?.speaker}
        img={activeSession?.img}
        designation={activeSession?.designation}
        sessionDetails={sessionDetails}
        containerDimensions={containerDimensions}
      />

      <Footer />
    </Layout>
  );
};
export default Live;
