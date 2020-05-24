import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyA8xVaBPoeQQWz6WgxJnjTQPQ6X-47fI7E',
  authDomain: 'todoist-clone-ac2c8.firebaseapp.com',
  databaseURL: 'https://todoist-clone-ac2c8.firebaseio.com',
  projectId: 'todoist-clone-ac2c8',
  storageBucket: 'todoist-clone-ac2c8.appspot.com',
  messagingSenderId: '41365033411',
  appId: '1:41365033411:web:ae407ec22afa010c5a2d76',
})

export { firebaseConfig as firebase }
