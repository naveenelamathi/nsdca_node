// const { Students,Certificate } = require('../models'); // Ensure this is correct
const { Certificate } = require('../models') // Adjust the path as necessary
const { verification }= require('../models')
const bcrypt = require('bcryptjs');
console.log("certificatte",Certificate)


exports.verify = async (req, res) => {
    const { aadhar } = req.body;
    console.log("aadhar",aadhar)
  
    try {
      // Check if the user exists with the provided Aadhaar number
      // const existingUser = await Students.findOne({ where: { aadhar } });
      const existingUser = await verification.findOne({ where: {register_no: aadhar } });
  
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
  const { serialNumber,studentRegNumber } = req.body;

  try {
      // Check if Certificate model is defined
      console.log('Certificate model:', Certificate); // Check this log

      const existingUser = await Certificate.findOne({ where: { register_no:studentRegNumber,serial_no: serialNumber } });

      if (!existingUser) {
          return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({ message: 'User found', user: existingUser });
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Server error' });
  }
};