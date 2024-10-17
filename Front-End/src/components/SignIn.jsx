import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const Navigate = useNavigate();
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);
    setState({
      email: "",
      password: ""
    });
    try {
      const response = await fetch('http://localhost:5000/TradSignIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state), // Envoie directement l'objet `state`
      });
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('token', responseData.token); // Exemple de stockage du token JWT dans localStorage
        Navigate('/panier');
      } else {
        const errorText = await response.text();
        if (response.status === 404) {
          alert('User not found.');
        } else {
          console.error('Erreur lors de la requête au backend:', errorText);
        }
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };

  const sendTokenToBackend = async (decoded) => {
    try {
      const response = await fetch('http://localhost:5000/googleSignIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ decoded }),
      });
      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('token', responseData.token); // Exemple de stockage du token JWT dans localStorage
        Navigate('/panier');
      } else {
        console.error('Erreur lors de la requête au backend:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit} className="connexion">
        <h1>Sign in</h1>
        <div className="social-container">
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse.credential);
              sendTokenToBackend(decoded);
            }}
            onError={() => {
              console.log('Échec de la connexion');
            }}
          />
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
