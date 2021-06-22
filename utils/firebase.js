import firebase from 'firebase/app';
import 'firebase/analytics';

  var firebaseConfig = {
    apiKey: "AIzaSyCp_1cBBclU2wY5OtRn-8Oixs3fFMAvE7Q",
    authDomain: "project-kiwi-10db2.firebaseapp.com",
    projectId: "project-kiwi-10db2",
    storageBucket: "project-kiwi-10db2.appspot.com",
    messagingSenderId: "156971911991",
    appId: "1:156971911991:web:5dffdad0b5ae12535b28b2",
    measurementId: "G-6KYQ8YWG0J"
  };

  let analytics;

  if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
   analytics = firebase.analytics;
  }

  export default analytics
