import React from "react";
import './../Styles/contact.css'
import { Map } from "./Map";
import { Block } from './Block';
export function Contact() {

    return <>
        <section className="Head">
            <h1>Contact</h1>
            <span></span>
        </section>
        <section className="Contact">

            <form action="">
                <h2>Nous Contacter!!</h2>
                <input type="text" placeholder="Full Name" />
                <input type='email' placeholder="Email" />
                <input type='tel' placeholder="Numero de Téléphone" />
                <textarea name="" id="" placeholder="Message"></textarea>
                <button className="mail" type="submit">Envoyer</button>
            </form>
            <div className="infoMail">
                <h2>Services 24/7</h2>
                <p>Pour avoir plus d'information sur nos services veuillez nous envoyer un mail directement</p>
                <div className="InfoCon">
                    <span> <strong>Adresse:</strong> Rte de Corniche</span>
                    <span><strong>Email:</strong>  Keynaspa@gmail.com</span>
                    <span> <strong>Numero de Téléphone: </strong>338642904</span>
                </div>
            </div>
        </section>
        <section className="Carte">
            <Map />
        </section>
        <Block />
    </>
}