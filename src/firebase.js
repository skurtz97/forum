import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const db = app.firestore();

export const addUser = async (email, name, password) => {
  return db
    .collection("users")
    .add({
      email: email,
      name: name,
      password,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
};

export const addThread = async (username, subject) => {
  return db
    .collection("threads")
    .add({
      subject: subject,
      creadtedBy: username,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
};
export const getThreads = async () => {
  return db.collection("threads").orderBy("createdAt", "desc").get();
};

export const getThreadsAfter = async (doc, lim) => {
  return db
    .collection("threads")
    .limit(lim)
    .orderBy("createdAt", "desc")
    .startAfter(doc);
};

export const getThreadsBefore = async (doc, lim) => {
  return db
    .collection("threads")
    .limitToLast(lim)
    .orderBy("createdAt", "desc")
    .endBefore(doc);
};

export const auth = app.auth();
