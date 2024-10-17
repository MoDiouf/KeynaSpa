import React, { useEffect, useState } from "react";
import { usePanier } from "./PanierContext";
import { v4 as uuidv4 } from 'uuid';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function Card({ items }) {
    const { panier, setPanier } = usePanier();
    const [prod, setProd] = useState({
        id: '',
        lien: '',
        quantite: '',
        nom: '',
        prix: '',
        sousTotal: ''
    });

    const itemProd = (item) => {
        setProd({
            id: uuidv4(), 
            lien: item.lien,
            prix: item.prix,
            nom: item.nom,
            sousTotal: item.prix * 1,
            quantite: 1
        });
    };

    useEffect(() => {
        if (prod.id && prod.lien && prod.prix) {
            setPanier(prevPanier => [...prevPanier, prod]);
        }
    }, [prod, setPanier]);

    return (
        <>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <div key={index} className='card'>
                        <span>
                            <img
                                loading="lazy"
                                src={item.lien}
                                style={{
                                    width: "100%",
                                    height: "50%",
                                    borderRadius: "10px 10px 0 0",
                                    display: "block",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    marginBottom: "20px"
                                }}
                                alt=""
                            />
                        </span>
                        <p>{item.nom}</p>
                        <p>{item.prix} fcfa</p>
                        <button className='butt' onClick={() => {itemProd(item)}}>Ajouter au panier</button>
                    </div>
                ))
            ) : (
                
                <div className="card">
                    <Skeleton height={200} style={{  borderRadius: '10px' }} />
                    <Skeleton height={20} style={{ marginTop: "10px"}} />
                    <Skeleton height={20} style={{  }} />
                    <Skeleton height={30} width={100} style={{ marginBottom: "20px" }} />
                </div>
            )}
        </>
    );
}
