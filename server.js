const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv').config();
const Product = require('./models/product.model.js');

let port = process.env.PORT || 5000;

app.use(express.json()); // This acts as the Middleware to parse JSON bodies
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World From Node Js  !');
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// For getting a single product by ID

app.get('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// This is for the Product Creation
app.post('/api/product', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
