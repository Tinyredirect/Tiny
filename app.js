// Firebase configuration for your project
const firebaseConfig = {
  apiKey: "AIzaSyAN0d34eH_JowTlB5KZEeAap1PtGGoFBVc", // Replace with your actual API Key
  authDomain: "tiny-redirect.firebaseapp.com", // Replace with your Firebase Auth domain
  databaseURL: "https://tiny-redirect-default-rtdb.firebaseio.com", // Replace with your Firebase Realtime Database URL
  projectId: "tiny-redirect", // Replace with your Firebase Project ID
  storageBucket: "tiny-redirect.appspot.com", // Replace with your Firebase Storage bucket
  messagingSenderId: "483985123684", // Replace with your Messaging Sender ID
  appId: "1:483985123684:web:0e2f992f3ae1729ee23271", // Replace with your Firebase App ID
  measurementId: "G-PQLS777XNJ" // Replace with your Firebase Measurement ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Auth: Google Sign-In
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      if (result.additionalUserInfo.isNewUser) {
        // New user: You can add more logic for account creation
        console.log('New user signed up:', user);
        alert(`Welcome, ${user.displayName}! Your account has been created.`);
      } else {
        // Existing user: Normal sign-in
        console.log('Existing user signed in:', user);
        alert(`Welcome back, ${user.displayName}!`);
      }
    })
    .catch((error) => {
      // Handle sign-in errors (e.g., network issue, permission denied)
      console.error('Error during sign-in:', error);
      if (error.code === 'auth/popup-closed-by-user') {
        alert('Sign-in was closed. Please try again.');
      } else {
        alert('Sign-in failed. Please try again or check your network connection.');
      }
    });
});