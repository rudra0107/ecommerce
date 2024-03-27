// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDoc, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwyJYCT3H-oGwvuH5goJ1kYn1D0Su-5kk",
  authDomain: "ecommerce-9c850.firebaseapp.com",
  projectId: "ecommerce-9c850",
  storageBucket: "ecommerce-9c850.appspot.com",
  messagingSenderId: "827357068053",
  appId: "1:827357068053:web:6d2877b7526a6c79ba871c",
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
const db = getFirestore(app);

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  // const UserCollectionRef = collection(db, "users");
  const UserDocumentRef = doc(db, `users/${userAuth.uid}`);

  const snapShot = await getDoc(UserDocumentRef);

  const createdAt = new Date();

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    try {
      await setDoc(UserDocumentRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return UserDocumentRef;

  // const data2 = await getDocs(UserCollectionRef);

  // console.log(UserCollectionRef);
  // console.log("Collection data: ", data2);
  // console.log(UserDocumentRef);
  // console.log("Document data: ", data);
};
export default app;
