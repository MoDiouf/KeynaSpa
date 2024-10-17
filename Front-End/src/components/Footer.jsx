import React from 'react';
import { FaInstagramSquare, FaFacebookSquare, FaSnapchatSquare } from "react-icons/fa";
import './../Styles/main.css';

function Footer() {

    const mailSend = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: event.target.email.value }), // Assurez-vous de récupérer la valeur correctement ici
            });

            const data = await response.text();
            console.log(data);

        } catch (error) {
            console.error('Erreur:', error);
        }
    }; 

    return (
        <>
            <footer>
                <div className="block">
                    <span className='logoFooter'></span>
                    <span className='logoNameFooter'>Keyna Spa</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima officia alias excepturi assumenda ducimus.</p>
                    <div className="links">
                        <a href="url_de_votre_instagram"><FaInstagramSquare /></a>
                        <a href="url_de_votre_facebook"><FaFacebookSquare /></a>
                        <a href="url_de_votre_snapchat"><FaSnapchatSquare /></a>
                    </div>
                </div>
                <div className="block">
                    <h1 className='foot'>Liens Importants</h1>
                    <ul className='listFoot'>
                        <li><a href="">Accueil</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Keyna Boutique</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className="block">
                    <h1 className='foot'>Join Our NewsLetter</h1>
                    <form className='formFoot' onSubmit={mailSend}>
                        <input type="email" name="email" placeholder="Email" /> 
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </footer>
            <div className='All'>
                <span>© 2024 All right Reserved. Created by Team1.</span>
            </div>
        </>
    );
};

export default Footer;
