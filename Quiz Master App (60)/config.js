import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC1tTXVIdKZLQ4vbAZmC8lsKxVALiPV3_s',
  authDomain: 'wireless-buzzer-3401c.firebaseapp.com',
  projectId: 'wireless-buzzer-3401c',
  storageBucket: 'wireless-buzzer-3401c.appspot.com',
  messagingSenderId: '1005195919114',
  databaseURL: 'https://wireless-buzzer-3401c-default-rtdb.firebaseio.com/',
  appId: '1:1005195919114:web:8ea22fcd7de76c417044f3',
};
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
