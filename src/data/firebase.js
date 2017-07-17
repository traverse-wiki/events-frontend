import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyABljxdX4JeDbr5NGoeMyoAuUg1g9L4Dww",
  authDomain: "tc-events.firebaseapp.com",
  databaseURL: "https://tc-events.firebaseio.com",
  projectId: "tc-events",
  storageBucket: "tc-events.appspot.com",
  messagingSenderId: "202682525327"
};

firebase.initializeApp(config);

export default firebase;
