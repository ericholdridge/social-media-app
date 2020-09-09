import firebase from "firebase"

let firebaseConfig = {
  apiKey: "AIzaSyD-3c-t0WNqKD0cI5q4CpHDKgxmRgXbHao",
  authDomain: "socialmediaapp-a4100.firebaseapp.com",
  databaseURL: "https://socialmediaapp-a4100.firebaseio.com",
  projectId: "socialmediaapp-a4100",
  storageBucket: "socialmediaapp-a4100.appspot.com",
  messagingSenderId: "1062433214601",
  appId: "1:1062433214601:web:42ef3a7ae387979bad3658",
  measurementId: "G-0JN7GFBHYW"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;