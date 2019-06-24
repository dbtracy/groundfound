import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAAx63oMao0OCweVBziYTTApaQCuPe6kCk",
        authDomain: "groundfounddb.firebaseapp.com",
        databaseURL: "https://groundfounddb.firebaseio.com",
        projectId: "groundfounddb",
        storageBucket: "groundfounddb.appspot.com",
        messagingSenderId: "987655444023",
        appId: "1:987655444023:web:4e318f9985a1a032"
      });
    }
  };

  observeAuth = user => {
    if (!user) {
      try {
        console.log("IM HERE NOW");
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  on = callback =>
    this.ref
      .limitToLast(20)
      .on("child_added", snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
