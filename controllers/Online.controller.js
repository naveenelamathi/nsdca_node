const { Students,Certificate } = require('../models'); // Ensure this is correct
const bcrypt = require('bcryptjs');

exports.verify = async (req, res) => {
    const { aadhar } = req.body;
  
    try {
      // Check if the user exists with the provided Aadhaar number
      const existingUser = await Students.findOne({ where: { aadhar } });
  
      if (existingUser) {
        // If user exists, return a success message and user data
        return res.status(200).json({
          message: 'User found',
          user: existingUser,
        });
      } else {
        // If user does not exist, return a not found message
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  };



exports.verification = async (req, res) => {
    const { student } = req.body;
  
    try {
      const existingUser = await Certificate.findOne({ where: { student } });
      // if (existingUser) {
      //   return res.status(400).json({ message: 'User already exists' });
      // }
  
      // const hashedPassword = await bcrypt.hash(password, 10);
  
      // const newUser = await Signup.create({
      //   email,
      //   password: hashedPassword,
      //   name,
      //   mobile,
      //   userType,
      //   district,
      // });
  
      return res.status(201).json({ message: 'User created successfully', user:existingUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  };
  
