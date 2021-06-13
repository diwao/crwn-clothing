import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCU60zeZVuizdcE5tOwbizS2gg1CpdqwXI',
  authDomain: 'ecdemo-f5ebf.firebaseapp.com',
  projectId: 'ecdemo-f5ebf',
  storageBucket: 'ecdemo-f5ebf.appspot.com',
  messagingSenderId: '126316722412',
  appId: '1:126316722412:web:01beaaa7262f0ca64b4dc9',
  measurementId: 'G-XZ9MYVVB9J',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
