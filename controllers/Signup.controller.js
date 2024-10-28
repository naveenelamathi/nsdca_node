const { Signup } = require('../models'); // Ensure this is correct
const bcrypt = require('bcryptjs');
console.log(Signup,"signup"); 
exports.signUp = async (req, res) => {
  const { email, password, name, mobile, userType, district } = req.body;

  try {
    const existingUser = await Signup.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Signup.create({
      email,
      password: hashedPassword,
      name,
      mobile,
      userType,
      district,
    });

    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'natarajan' });
  }
};

// Login Route
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await Signup.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare provided password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Optionally, return user data (avoid sending sensitive info like password)
    return res.status(200).json({ message: 'Login successful', user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'user' });
  }
};