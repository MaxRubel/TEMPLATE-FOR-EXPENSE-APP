import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const clientCredentials = {
  apiKey: "AIzaSyBjGPaGc-ZjoE2mJBpQgZF9jKg4Hmbrlyk",
  authDomain: "trip-expense-tracker-40e17.firebaseapp.com",
  databaseURL: "https://trip-expense-tracker-40e17-default-rtdb.firebaseio.com",
  projectId: "trip-expense-tracker-40e17",
  storageBucket: "trip-expense-tracker-40e17.appspot.com",
  messagingSenderId: "776919249943",
  appId: "1:776919249943:web:439a0d04bb6f412f861852",
  measurementId: "G-YBD9XE8JP1"
};

if (!firebase.apps.length) {
  firebase?.initializeApp(clientCredentials);
}

export { firebase, clientCredentials };
