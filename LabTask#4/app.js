const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const Jewellery = require('./models/jewellery');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define your routes
const landingRouter = require('./routes/landing');
const formRouter = require('./routes/form');
const homepageRouter = require('./routes/homepage');
const necklaceRouter = require('./routes/necklace');
const braceletRouter = require('./routes/bracelet');
const earringsRouter = require('./routes/earrings');
const ringsRouter = require('./routes/rings');
const checkoutRouter = require('./routes/checkout');
const submitformRoute = require('./routes/submitform');

app.use('/', landingRouter);
app.use('/form', formRouter);
app.use('/homepage', homepageRouter);
app.use('/necklace', necklaceRouter);
app.use('/bracelet', braceletRouter);
app.use('/earrings', earringsRouter);
app.use('/rings', ringsRouter);
app.use('/checkout', checkoutRouter);
app.use('/submit', submitformRoute);


// MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/Jewellistiq', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB...'))
  .catch((error) => console.log(error.message));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});