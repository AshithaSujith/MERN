const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/eshop', { useNewUrlParser: true, useUnifiedTopology: true });

// Product schema
const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

// Routes
app.post('/api/products', async (req, res) => {
  const { name, image, price, description } = req.body;
  const newProduct = new Product({ name, image, price, description });
  await newProduct.save();
  res.status(201).send(newProduct);
});

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
