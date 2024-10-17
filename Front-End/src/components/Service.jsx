
import React, { useEffect,useState } from "react";
import './../Styles/services.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Block } from "./Block";
import Comment from './Comment';

export function Service() {

    useEffect(() => {

        Aos.init()
    }, [])


    

    return <>
        <section className="Head">
            <h1 >Services</h1>
            <span></span>
        </section>
        <section className="Services">
            <h1 className="TitleService">Nos Services</h1>
            <div className="Group1"  >
                <span className="hydro" data-aos-once="true" data-aos="fade-right" data-aos-duration="1000"></span>
                <div data-aos-once="true" data-aos="fade-left" data-aos-duration="1000">
                    <h2 className="servTitle">HydroTherapie</h2>
                    <p>Découvrez l'hydrothérapie dans notre section services, une expérience conçue pour vous offrir un moment de détente et de revitalisation incomparable. Plongez dans un univers de bien-être où chaque traitement, qu'il s'agisse de bains relaxants, de massages aquatiques ou de douches revitalisantes, est minutieusement adapté pour répondre à vos besoins spécifiques.</p>
                </div>

            </div>
            <div className="Group2">

                <div data-aos="zoom-in-down" data-aos-once="true" data-aos-duration="1000">
                    <h2 className="servTitle">Rituel et Massage</h2>
                    <p>Découvrez l'hydrothérapie dans notre section services, une expérience conçue pour vous offrir un moment de détente et de revitalisation incomparable. Plongez dans un univers de bien-être où chaque traitement, qu'il s'agisse de bains relaxants, de massages aquatiques ou de douches revitalisantes, est minutieusement adapté pour répondre à vos besoins spécifiques.</p>
                </div>
                <span data-aos-once="true" className="rituel" data-aos="zoom-in-up" data-aos-duration="1000"></span>
            </div>
            <div className="Group1" >
                <span data-aos="zoom-in-right" data-aos-once="true" data-aos-duration="1000" className="soin"></span>
                <div data-aos-once="true" data-aos="zoom-in-left" data-aos-duration="1000">
                    <h2 className="servTitle">Soins</h2>
                    <p>Découvrez l'hydrothérapie dans notre section services, une expérience conçue pour vous offrir un moment de détente et de revitalisation incomparable. Plongez dans un univers de bien-être où chaque traitement, qu'il s'agisse de bains relaxants, de massages aquatiques ou de douches revitalisantes, est minutieusement adapté pour répondre à vos besoins spécifiques. </p>
                </div>

            </div>
            <div className="Group2">

                <div data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
                    <h2 className="servTitle">Produits</h2>
                    <p>Découvrez l'hydrothérapie dans notre section services, une expérience conçue pour vous offrir un moment de détente et de revitalisation incomparable. Plongez dans un univers de bien-être où chaque traitement, qu'il s'agisse de bains relaxants, de massages aquatiques ou de douches revitalisantes, est minutieusement adapté pour répondre à vos besoins spécifiques.</p>
                    <a className="showProduit" href="#">Voir Produits</a>
                </div>
                <span data-aos-once="true" className="produits" data-aos="zoom-out" data-aos-duration="1000"></span>
            </div>
        </section>
        <section className="Abonnement">
            <h1 className="TitleService ">KeynaSpa Abonnements</h1>
            <aside>
                <div className="cardd" data-aos="fade-left">
                    <h2 className="therapy">Aroma Therapy</h2>
                    <p>Delight your senses with the soothing scents of essential…</p>
                    <hr />
                    <button>7000 fcfa</button>
                </div>
                <div className="cardd">
                    <h2 className="therapy">Aroma Therapy</h2>
                    <p>Delight your senses with the soothing scents of essential…</p>
                    <hr />
                    <button>7000 fcfa</button>
                </div>
                <div className="cardd" data-aos="fade-right">
                    <h2 className="therapy">Aroma Therapy</h2>
                    <p>Delight your senses with the soothing scents of essential…</p>
                    <hr />
                    <button>7000 fcfa</button>
                </div>
            </aside>
            <h1 className="TitleService tit">Bienfaits</h1>
            <aside>
                <div className="cont">
                    <span className="ball"></span>
                    <h1 className="bien">Stress Relief</h1>
                </div>
                <span className="wall"></span>
                <div className="cont">
                    <span className="ball"></span>
                    <h1 className="bien">Stress Relief</h1>
                </div>
                <span className="wall"></span>
                <div className="cont">
                    <span className="ball"></span>
                    <h1 className="bien">Stress Relief</h1>
                </div>
                <span className="wall"></span>
                <div className="cont">
                    <span className="ball"></span>
                    <h1 className="bien">Stress Relief</h1>
                    
                </div>
            </aside>
        </section>
        <Comment/>
        <Block />
    </>
}