import React, { useEffect } from 'react';
import Footer from './components/Footer.jsx';
import { Accueil } from './components/Accueil.jsx';
import { Boutique } from './components/Boutique.jsx';
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Admin } from './components/Admin.jsx';
import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Styles/main.css';
import { AdminPage } from './components/AdminPage.jsx';
import { MdOutlineShoppingCart } from "react-icons/md";
import { Panier } from './components/Panier.jsx';
import { AuthProvider, useAuth } from './components/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import { Contact } from './components/Contact.jsx';
import { Service } from './components/Service.jsx';
import Loading from './components/Loading.jsx';
import { Connexion } from './components/connection.jsx';
import { Resume } from './components/ResumeCom.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /></>,
    children: [
      {
        path: '',
        element: <Accueil />
      },
      {
        path: 'accueil',
        element: <Accueil />
      },
      {
        path: 'boutique',
        element: <Boutique />
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: "adminpage",
        element: (
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "panier",
        element: <Panier />,
      },
      {
        path: 'connexion',
        element: <Connexion />
      },{
        path: 'resume',
        element: <Resume />
      }
      ,
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'services',
        element: <Service />
      }
    ]
  }
]);

function Navbar() {
  const NavRef = useRef();
  const [showSubmenu, setShowSubmenu] = useState(false);

  const showNav = () => {
    NavRef.current.classList.toggle('responsive-nav');
  };

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <>
      <header>
        <h3 className='logoContainer'>
          <span className='logo'></span>
          <span className='logoName'>Keyna Spa</span>
        </h3>
        <nav ref={NavRef}>
          <NavLink to={"/"} onClick={showNav}>Accueil</NavLink>
          <a href="#" onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
            Services
            {showSubmenu && (
              <div className="submenu">
                <a href="#">Accès Spa</a>
                <a href="#">Hydrothérapie </a>
                <a href="#">Rituel et Massage </a>
                <a href="#">Soins </a>
                <a href="#">Abonnements </a>
                <a href="#">Produits </a>
              </div>
            )}
          </a>
          <NavLink to={"boutique"} onClick={showNav}>Keyna Boutique</NavLink>
          <NavLink to={'contact'} onClick={showNav}>Contact</NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNav}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNav}>
          <FaBars />
        </button>
        <NavLink to={'panier'} className='shop'><MdOutlineShoppingCart /></NavLink>
      </header>
      <div><Outlet /></div>
    </>
  );
}

function App() {

  const [load, setLoad] = useState(true)
  useEffect(() => {

    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, [])
  return (
    load ? <div className='loading'><Loading /></div> :
      <AuthProvider>
        <RouterProvider router={router} />
        <Footer />
      </AuthProvider>
  );
}

export default App;
