import admin from 'firebase-admin';
import express from 'express';

const bodyParser = require('body-parser');
const cors = require('cors');
// eslint-disable-next-line import/no-unresolved
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://samwise-positivity.firebaseio.com',
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = admin.firestore();
const emailsCollection = db.collection('emails');

app.post('/addEmail', async (req: express.Request, res: express.Response) => {
  const { body } = req;
  const addedEmail = await emailsCollection.add(body);
  res.send(addedEmail.id);
});

app.get('/getEmails', async (_: express.Request, res: express.Response) => {
  const emailsDocs = await emailsCollection.get();
  const emails = emailsDocs.docs.map((doc) => doc.data);
  res.send(emails);
});

// eslint-disable-next-line no-console
app.listen(8080, () => { console.log('app started'); });
