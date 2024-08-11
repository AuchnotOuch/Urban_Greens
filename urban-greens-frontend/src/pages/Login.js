import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        // Basic authentication for example purposes
        if (username === 'admin' && password === 'password') {
            onLogin(true);
            navigate('/blog/admin')
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <h1>Admin Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
