import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createProduct = async (req, res) => {
    const { name, description, price, imageUrl, category } = req.body;
    const newProduct = new Product({ name, description, price, imageUrl, category });

    try {
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
