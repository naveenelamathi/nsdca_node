const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
require('dotenv').config();
const db = require('./db');
// app.use(cors()); 
app.use(bodyParser.json()); 
const authController = require('./controllers/Signup.controller');
const verifyController = require('./controllers/Online.controller');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../NSDCA/build')));

app.use(cors({
  origin: 'https://nsdca-front-end.onrender.com', 
}));

app.get('/', (req, res) => {
  res.send('Simple API homepage');
})


app.post('/sign', authController.signUp);
app.post('/login',authController.login);
app.post('/verify',verifyController.verify);
app.post('/verification',verifyController.verification);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../NSDCA/build', 'index.html'), (err) => {
    if (err) {
      res.status(err.status).end();
    }
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

