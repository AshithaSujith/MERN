const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const productSchema = new mongoose.Schema({
    title: String,
    details: String,
    image: String,
});

const Product = mongoose.model('Product', productSchema);


app.post('/api/products', async (req, res) => {
    console.log("POST Request Received:", req.body);
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

app.get('/api/products', async (req, res) => {
    console.log("GET Request Received");
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});
app.get('/api/products/:id', async (req, res) => {
    let id = req.params.id
    console.log("GET Request Received");
    try {
        const products = await Product.findOne({_id:id});
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
