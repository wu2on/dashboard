import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

export const config = {
  apiKey: "AIzaSyC8h0ZwyZEaWkLXLyumTP8iVsMVbeR5PMs",
  authDomain: "test-cleveroad-wu2on.firebaseapp.com",
  projectId: "test-cleveroad-wu2on",
  storageBucket: "test-cleveroad-wu2on.appspot.com",
  messagingSenderId: "199811211912",
  appId: "1:199811211912:web:21cdfcf1462d2286ccb53d",
};

export const app = firebase.initializeApp(config);
export const db = firebase.firestore(app);
export const auth = firebase.auth();
export const storage = firebase.storage();

export default app;
