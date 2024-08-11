// /src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';
import BlogModal from '../components/BlogModal';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get('/api/blogs');
            setBlogs(response.data);
        };
        fetchBlogs();
    }, []);

    const openBlogModal = (blog) => {
        setSelectedBlog(blog);
    };

    const closeBlogModal = () => {
        setSelectedBlog(null);
    };

    return (
        <div className="blog">
            <div className="blog-grid">
                {blogs.map(blog => (
                    <div
                        key={blog._id}
                        className="blog-post"
                        onClick={() => openBlogModal(blog)}
                    >
                        <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
                        <h2>{blog.title}</h2>
                        <p>{blog.author} - {new Date(blog.date).toLocaleDateString()}</p>
                        <p>{blog.content.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>

            {selectedBlog && (
                <BlogModal blog={selectedBlog} onClose={closeBlogModal} />
            )}
        </div>
    );
};

export default Blog;
