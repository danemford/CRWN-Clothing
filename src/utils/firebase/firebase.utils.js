import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, } from 'firebase/auth'


import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkXotw7iyaupqqM7e2Y_9VGdb2EuPC3_I",
    authDomain: "crwn-clothing-db-d115a.firebaseapp.com",
    projectId: "crwn-clothing-db-d115a",
    storageBucket: "crwn-clothing-db-d115a.appspot.com",
    messagingSenderId: "680455052154",
    appId: "1:680455052154:web:6eb82e7b7d2ccd7d02d4c3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd ) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done')
  }

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
     const q = query(collectionRef);

     const querySnapshot = await getDocs(q);
     const catageoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
     }, {});

     return catageoryMap;
  }


  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
  
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
         } catch (error) {
                console.log('error creating the user' + error.message)
            };
        }

        return userDocRef;
    };

    export const createAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || ! password) return;

         return await createAuthUserWithEmailAndPassword (auth, email, password);
    }

    export const signInAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || ! password) return;

         return await signInWithEmailAndPassword (auth, email, password);
    }

    export const signOutUser = async () => await signOut(auth);

    export const onAuthStateChangedListerner = (callback) => onAuthStateChanged(auth, callback);
    