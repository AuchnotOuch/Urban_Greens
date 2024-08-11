import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { faker } from '@faker-js/faker';

import Product from './models/Product.js';
import Blog from './models/Blog.js';
import Contact from './models/Contact.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err.message);
});

// Function to seed the Product data
const seedProducts = async () => {
    await Product.deleteMany({}); // Clear existing products

    const products = Array.from({ length: 20 }).map(() => ({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        imageUrl: faker.image.url(), // Updated to use faker.image.url
        category: faker.commerce.department(),
        inStock: faker.datatype.boolean(),
    }));

    await Product.insertMany(products);
    console.log('Products seeded!');
};

// Function to seed the Blog data
const seedBlogs = async () => {
    await Blog.deleteMany({}); // Clear existing blogs

    const blogs = Array.from({ length: 10 }).map(() => ({
        title: faker.lorem.words(5),
        content: faker.lorem.paragraphs(3),
        author: faker.person.fullName(), // Updated to use faker.person.fullName
        tags: faker.lorem.words(3).split(' '),
    }));

    await Blog.insertMany(blogs);
    console.log('Blogs seeded!');
};

// Function to seed the Contact data
const seedContacts = async () => {
    await Contact.deleteMany({}); // Clear existing contacts

    const contacts = Array.from({ length: 5 }).map(() => ({
        name: faker.person.fullName(), // Updated to use faker.person.fullName
        email: faker.internet.email(),
        message: faker.lorem.sentences(2),
    }));

    await Contact.insertMany(contacts);
    console.log('Contacts seeded!');
};

// Seed the data and close the connection
const seedDatabase = async () => {
    try {
        await seedProducts();
        await seedBlogs();
        await seedContacts();
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
        console.log('MongoDB connection closed');
    }
};

seedDatabase();
