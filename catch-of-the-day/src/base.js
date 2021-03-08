import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD87aXvl1tGyH64iBu2HiWEcWQNIdXdZno',
  authDomain: 'catch-of-the-day-bf.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-bf-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
