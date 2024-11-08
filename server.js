const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const { Sequelize } = require('sequelize');
require('dotenv').config();


const db = require('./db');
app.use(bodyParser.json()); 
const authController = require('./controllers/Signup.controller');
const verifyController = require('./controllers/Online.controller');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Simple API homepage');
})


app.post('/sign', authController.signUp);
app.post('/login',authController.login);
app.post('/verify',verifyController.verify);
app.post('/verification',verifyController.verification);



app.listen( () => {
  console.log(`Server is running on port `);
});

