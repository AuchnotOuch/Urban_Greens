import Blog from '../models/Blog.js';

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createBlog = async (req, res) => {
    const { title, content, author, tags } = req.body;
    const newBlog = new Blog({ title, content, author, tags });

    try {
        const savedBlog = await newBlog.save();
        res.json(savedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
