import firebase from 'firebase';
import { apiKey } from '../private/firebase';

const config = {
  apiKey: apiKey,
  authDomain: "tc-events.firebaseapp.com",
  databaseURL: "https://tc-events.firebaseio.com",
  projectId: "tc-events",
  storageBucket: "tc-events.appspot.com",
  messagingSenderId: "202682525327"
};

firebase.initializeApp(config);

export default firebase;
