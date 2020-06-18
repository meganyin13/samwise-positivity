const admin = require('firebase-admin')
const serviceAccount = require('./ServiceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://samwise-positivity.firebaseio.com'
})

let db = admin.firestore()