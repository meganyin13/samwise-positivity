const admin = require("firebase-admin")
let serviceAccount = require("./ServiceAccountKey.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://samwise-positivity.firebaseio.com"
})

let db = admin.firestore()
