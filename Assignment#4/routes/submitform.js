const express = require('express');
const router = express.Router();
const Form = require('../models/form');

// Handle GET request to display the registration form
router.get('/', (req, res) => {
  res.render('submitform');
});

// Handle POST request when the registration form is submitted
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      return res.render('submitform', { error: 'Passwords do not match' });
    }

    // Check if the email already exists in the database
    const existingUser = await Form.findOne({ email });
    if (existingUser) {
      return res.render('submitform', { error: 'Email already exists' });
    }

    // Create a new user object
    const newUser = new Form({
      firstName,
      lastName,
      email,
      password
    });

    // Save the user to the database
    await newUser.save();

    res.redirect('/homepage'); // Redirect to a success page or any other route
  } catch (error) {
    console.log(error);
    res.render('submitform', { error: 'An error occurred. Please try again.' });
  }
});

module.exports = router;
