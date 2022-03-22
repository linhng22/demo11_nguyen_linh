//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDNwsT15Hva_dEvOoKJEcDUpsja0vkoWmc",
  authDomain: "fir-comp1800-57b0d.firebaseapp.com",
  projectId: "fir-comp1800-57b0d",
  storageBucket: "fir-comp1800-57b0d.appspot.com",
  messagingSenderId: "974402784175",
  appId: "1:974402784175:web:bca3f3388bd83e434f3d5a"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
