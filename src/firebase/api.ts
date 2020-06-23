import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCJB5sGX1ejES59goAjFUFa8PjLJAuHT-k',
  authDomain: 'samwise-positivity.firebaseapp.com',
  databaseURL: 'https://samwise-positivity.firebaseio.com',
  projectId: 'samwise-positivity',
  storageBucket: 'samwise-positivity.appspot.com',
  messagingSenderId: '1047480032559',
  appId: '1:1047480032559:web:dc4c9d845104ba1f8c55da',
  measurementId: 'G-6WS3MMV659',
}

firebase.initializeApp(firebaseConfig)

const emailsIDCollection = firebase.firestore().collection('emails_id')

export const addEmail = (email: string):
Promise<void> => emailsIDCollection.doc(email).set({ email });