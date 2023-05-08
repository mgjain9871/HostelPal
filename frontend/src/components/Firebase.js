import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtrd_Dh2FEzOZWcqlgv5zZ8Eb65PceSyY",
  authDomain: "hostel-pal-559d5.firebaseapp.com",
  projectId: "hostel-pal-559d5",
  storageBucket: "hostel-pal-559d5.appspot.com",
  messagingSenderId: "652216242658",
  appId: "1:652216242658:web:dd1c63fc2085c6f4b1a9bb",
  measurementId: "G-CNXKYGY5W5"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const fullName = user.displayName;
      const len = fullName.length;
      const email = user.email;

      if (email.slice(-10) !== "jiit.ac.in") {
        alert("Please login with jiit email");
        auth.signOut();
      } else {
        const userName = fullName;
        const fName = userName.split(" ")[0];
        localStorage.setItem("userName", userName);
        localStorage.setItem(
          "fname",
          fName.charAt(0) + fName.slice(1).toLowerCase()
        );
        localStorage.setItem("id", email.substring(0,8));
        localStorage.setItem("email", email);
        localStorage.setItem("photo", user.photoURL);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const sign_out = () => {
  auth.signOut();
  localStorage.clear();
};

const db = app.firestore();

export { auth, signInWithGoogle, sign_out as signOut, db };
