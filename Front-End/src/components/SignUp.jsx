import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

function SignUpForm() {

  const Navigate = useNavigate()
  const [state, setState] = useState({
    name: "",
    email: "",
    sub: ""
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

    const { name, email, sub } = state;
    alert(
      `You are signing up with name: ${name}, email: ${email}, and password: ${sub}`
    );

    setState({
      name: "",
      email: "",
      sub: ""
    });

    if (state.sub) {
      try {
        const response = await fetch('http://localhost:5000/traditionalSignUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state),
        });

        if (response.ok) {
          Navigate('/panier')
        }

        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error('Error sending data to backend:', error.message);
      }
    } else {
      // Handle Google OAuth data submission
      // You can call your function to send `decoded` data to backend here
    }
  };

  const sendTokenToBackend = async (decoded) => {
    try {
      const response = await fetch('http://localhost:5000/googleSignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ decoded }),
      });
  
      if (response.ok) {
        Navigate('/panier');
      } else {
        const errorText = await response.text();
        if(response.status===400){
          alert(
            `Compte deja enregistré`
          );
        }
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit} className="connexion">
        <h1>Create Account</h1>
        <div className="social-container">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              sendTokenToBackend(decoded);
              console.log(decoded);
            }}
            onError={() => {
              console.log('Connection failed');
            }}
            clientId="your-google-client-id" // Replace with your actual Google Client ID
          />
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="sub"
          value={state.sub}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
