import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDvcS9mG_PkbU_YDsriTg8yFpqZhHLcCPY",
    authDomain: "booksanta-34599.firebaseapp.com",
    databaseURL: "https://booksanta-34599.firebaseio.com",
    projectId: "booksanta-34599",
    storageBucket: "booksanta-34599.appspot.com",
    messagingSenderId: "997462096518",
    appId: "1:997462096518:web:6f45ae604ae555d3916f07"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();