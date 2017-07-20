import firebase from 'firebase';
import { config } from '../private/firebase';

firebase.initializeApp(config);

export default firebase;
