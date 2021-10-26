import React, { useEffect, useState } from 'react';

// Libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

  useEffect(() => {
    if (app) {
      const fetchActiveSession = async () => {
        const activeStreamCollection = collection(db, 'activeStream');
        const snapshot = await getDocs(activeStreamCollection);
        const docList = snapshot.docs.map((d) => d.data());

        setActiveSession(docList[0]);
        return Promise.resolve();
      };

      const fetchSessionDetails = async () => {
        const sessionDetailsCollection = collection(db, 'livestream');
        const snapshot = await getDocs(sessionDetailsCollection);
        const docList = snapshot.docs.map((d) => d.data());

        setSessionDetails(docList);
        return Promise.resolve();
      };

      const fetchData = async () => {
        await Promise.all([fetchActiveSession(), fetchSessionDetails()]);
      };

      fetchData();
    }
  }, []);

  return (
    <Layout>
      <LiveSection
        youtubeLiveLink={activeSession?.link}
        title={activeSession?.title}
        speaker={activeSession?.speaker}
        img={activeSession?.img}
        designation={activeSession?.designation}
        sessionDetails={sessionDetails}
      />

      <Footer />
    </Layout>
  );
};
export default Live;
