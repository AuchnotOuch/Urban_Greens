import React from 'react';
import './BlogModal.css';

const BlogModal = ({ blog, onClose }) => {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{blog.title}</h2>
                <p>{blog.author} - {new Date(blog.date).toLocaleDateString()}</p>
                <div className="modal-body">
                    <p>{blog.content}</p>
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BlogModal;
