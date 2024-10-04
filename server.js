const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const db = require('./db');
app.use(cors()); 
app.use(bodyParser.json()); 
const authController = require('./controllers/Signup.controller');
const verifyController = require('./controllers/Online.controller');
app.use(bodyParser.json());

app.post('/signup', authController.signUp);
app.post('/login',authController.login);
app.post('/verify',verifyController.verify);
app.post('/verification',verifyController.verification);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
