const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const { Sequelize } = require('sequelize');
require('dotenv').config();


const db = require('./db');
app.use(cors());
app.use(bodyParser.json()); 
const authController = require('./controllers/Signup.controller');
const verifyController = require('./controllers/Online.controller');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// app.get('/', (req, res) => {
//   res.send('Simple API homepage');
// })
 
app.post('/signs', (req, res) => {
  const { userType, name, mobile, password } = req.body;

  // Perform simple validation
  if (!userType || !name || !mobile || !password) {
      return res.json({ success: false, message: "All fields are required." });
  }

  // Here, you would typically save the data to a database
  console.log('Received signup data:', req.body);

  // For now, simulate a successful signup
  res.json({
      success: true,
      message: "Registration successful!"
  });
});


app.post('/sign', authController.signUp);
app.post('/login',authController.login);
app.post('/verify',verifyController.verify);
app.post('/verification',verifyController.verification);



// app.listen( () => {
//   console.log(`Server is running on port `);
// });
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend server running at http://127.0.0.1:${PORT}`); 
});
