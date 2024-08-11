import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBlog = { title, author, content, date: new Date(), tags };
        try {
            await axios.post('/api/blogs', newBlog);
            alert('Blog post added successfully');
            setTitle('');
            setAuthor('');
            setContent('');
            setTags('')
        } catch (error) {
            alert('Error adding blog post');
        }
    };

    return (
        <div className="admin">
            <form onSubmit={handleSubmit}>
                <h1>Add New Blog Post</h1>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <input
                    type="text"
                    placeholder="Tags seperated by commas"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    required
                />
                <button type="submit">Add Blog Post</button>
            </form>
        </div>
    );
};

export default Admin;
