import React from 'react';
import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './../Styles/main.css';
import { NavLink } from 'react-router-dom';


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
                <h3>Logo</h3>
                <nav ref={NavRef}>
                    <NavLink to={"/"}>Accueil</NavLink>
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
                    <NavLink to={"boutique"}>Keyna Boutique</NavLink>
                    <a href="#">Contact</a>
                    <button className="nav-btn nav-close-btn" onClick={showNav}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNav}>
                    <FaBars />
                </button>
            </header>
            <div><Outlet/></div>
        </>
    );
  }

export default Navbar;
