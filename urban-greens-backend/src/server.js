import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import productRoutes from './routes/products.js';
import blogRoutes from './routes/blogs.js';
import contactRoutes from './routes/contacts.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contacts', contactRoutes);

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../../urban-greens-frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../urban-greens-frontend/build', 'index.html'));
    });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
