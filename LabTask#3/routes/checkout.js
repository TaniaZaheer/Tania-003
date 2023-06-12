// checkout.js

const express = require('express');
const router = express.Router();
const Jewellery = require("../models/jewellery");

// GET route for the checkout page
router.get('/', async (req, res) => {
  try {
    const jewellery = await Jewellery.find();
    res.render('checkout', { jewellery });
  } catch (error) {
    console.log('Error retrieving data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// POST route for submitting the form
router.post('/', async (req, res) => {
  try {
    const { Email, First_Name, Last_Name, price } = req.body;
    const newJewellery = new Jewellery({ Email, First_Name, Last_Name, price });
    await newJewellery.save();
    res.redirect('/checkout'); // Redirect to the checkout page or any other desired page
  } catch (error) {
    console.log('Error adding data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// PUT route for updating the data
router.put('/', async (req, res) => {
  try {
    const { itemId, Email, First_Name, Last_Name, price } = req.body;
    await Jewellery.findByIdAndUpdate(itemId, { Email, First_Name, Last_Name, price });
    res.redirect('/checkout'); // Redirect to the checkout page or any other desired page
  } catch (error) {
    console.log('Error updating data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// GET route for the update page
router.get('/update', async (req, res) => {
  try {
    const jewellery = await Jewellery.find();
    res.render('update', { jewellery });
  } catch (error) {
    console.log('Error retrieving data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE route for deleting an item
router.delete('/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    await Jewellery.findByIdAndRemove(itemId);
    res.redirect('/checkout'); // Redirect to the checkout page or any other desired page
  } catch (error) {
    console.log('Error deleting data:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
