import React, { useState } from 'react';
import './../Styles/admin.css';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export function Admin() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                login(); 
                navigate('/adminpage'); // Utilisez useNavigate pour la redirection
            } else {
                setError('Nom d\'utilisateur ou mot de passe incorrect');
            }
        } catch (error) {
            console.error('Erreur lors de l\'authentification :', error);
            setError('Une erreur s\'est produite lors de l\'authentification');
        }
    };

    return (
        <>
            <div className="overlay">
                <form className='form' onSubmit={handleLogin}>
                    <div className="con">
                        <header className="head-form header">
                            <h2>Log In</h2>
                            <p>login here using your username and password</p>
                        </header>
                        <br />
                        <div className="field-set">
                            <span className="input-item"><i className="fa fa-user-circle"></i></span>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="@UserName"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <br />
                            <span className="input-item"><i className="fa fa-key"></i></span>
                            <input
                                className="form-input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span>
                                <i className="fa fa-eye" aria-hidden="true" onClick={() => {
                                    const pwdInput = document.getElementById("pwd");
                                    pwdInput.type = pwdInput.type === "password" ? "text" : "password";
                                }}></i>
                            </span>
                            <br />
                            <button className="log-in button" type="submit">Log In</button>
                            {error && <p className="error-message">{error}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
