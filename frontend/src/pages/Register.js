import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/api/auth/register", {
                username,
                password,
            });

            navigate("/login"); // Redirect to Login after successful registration
        } catch (err) {
            setError("Registration failed. Try a different username.");
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Register</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default Register;
