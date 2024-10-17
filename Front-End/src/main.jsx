import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PanierProvider } from './components/PanierContext.jsx'
import  { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PanierProvider>
      < GoogleOAuthProvider clientId="286654460293-upciu5nsbbjb33kt6sh1nckqp945rp6o.apps.googleusercontent.com" >
        <App />
      </GoogleOAuthProvider>
    </PanierProvider>

  </React.StrictMode>,
)
