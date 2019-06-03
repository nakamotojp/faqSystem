import firebase from 'firebase';
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.authDomain,
  databaseURL: "https://faqsystem-829e5.firebaseio.com",
  projectId: "faqsystem-829e5",
  storageBucket: "faqsystem-829e5.appspot.com",
  messagingSenderId: process.env.SENDER_ID,
  appId: "1:60882381012:web:b74a8bc072201560"
};


firebase.initializeApp(firebaseConfig);
export default firebase;