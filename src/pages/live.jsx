import React, { useEffect } from 'react';

// Libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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
  useEffect(() => {
    if (app) {
      const fetchData = async () => {
        const trialCollection = collection(db, 'trial');
        const snapshot = await getDocs(trialCollection);
        const docList = snapshot.docs.map((doc) => doc.data());

        console.log(docList);
      };

      fetchData();
    }
  }, []);

  return (
    <div>
      <h2>Livestream</h2>
    </div>
  );
};
export default Live;
