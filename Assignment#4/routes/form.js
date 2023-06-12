const express = require("express");
const router = express.Router();

// Handle GET request to display the signup form
router.get("/", async (req, res) => {
  res.render("form");
});

// Handle POST request when the signup form is submitted
router.post("/signup", async (req, res) => {
  try {
    // Process the signup form data and save the user to the database

    // Redirect the user to the homepage after successful signup
    res.redirect("/homepage");
  } catch (error) {
    // Handle any errors that occur during signup
    console.log(error);
    res.redirect("/form");
  }
});

module.exports = router;
