/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCO0t63YUzfWJcmkGygpFbiVDQpj9pD_PM",
  authDomain: "friendlychat-d2e2d.firebaseapp.com",
  projectId: "friendlychat-d2e2d",
  storageBucket: "friendlychat-d2e2d.appspot.com",
  messagingSenderId: "709223230645",
  appId: "1:709223230645:web:7e7418162e2a543cd0a2fc"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}