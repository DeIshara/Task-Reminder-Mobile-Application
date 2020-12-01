// database/firebaseDb.js

import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB18qTDvNFBKZeMwJ3dtAtSybVHtZSY45A",
    authDomain: "100063411996-1aqpi4eetu2tpe9kfgqhbdp9aoqu4rd2.apps.googleusercontent.com",
    databaseURL: "https://task-reminder-8d473.firebaseio.com",
    projectId: "task-reminder-8d473",
    storageBucket: "task-reminder-8d473.appspot.com",
    messagingSenderId: "100063411996",
    appId: "1:100063411996:android:fe0198ea14c2d8f83604d9"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;