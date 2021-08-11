import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAjOJM2A2sgpGcMgEHQ9COOHHGt3Fsmjoo',
  authDomain: 'netflix-app-clone-60fd5.firebaseapp.com',
  projectId: 'netflix-app-clone-60fd5',
  storageBucket: 'netflix-app-clone-60fd5.appspot.com',
  messagingSenderId: '860884868941',
  appId: '1:860884868941:web:16dff36c95e549e59f6104',
  measurementId: 'G-SCM1ERJ2PN',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
