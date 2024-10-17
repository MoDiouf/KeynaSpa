import React, { useEffect, useState } from 'react';
import './../Styles/boutique.css';
import { Autoscroll } from './Autoscroll';
import image1 from './../assets/caroussel1.jpg';
import { Card } from './cards';
import Skeleton from 'react-loading-skeleton';

export function Boutique() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/produits', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error status: ${response.status}`);
                }
                const data = await response.json();
                
                setProducts(data);
                setLoading(false); 
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);

    
    let prix = []
    let display= 0
    products.forEach((produit) => {
        prix.push(produit.quantite)
    })
   
    prix.forEach((element) => {
        display = display + element
    })
    return (
        <>
            <main>
                <section className='introductionBoutique'>
                    <span>
                        <div>
                            <h2>Produits de chez Keyna Spa</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis ipsum sed! Suscipit odit ipsum voluptate exercitationem quam architecto nostrum sit esse. Aspernatur, magni. Corrupti consectetur impedit optio expedita praesentium.</p>
                        </div>
                    </span>
                </section>
                <section className='showProd'>
                    <div className='titleProd'>
                        <h1>Produits disponibles</h1>
                        {loading ? (
                            <Skeleton width={100} height={20} />
                        ) : (
                            <span>{display} produits</span>
                        )}
                    </div>
                    <hr />
                    <div className='caroussel'>
                        <Autoscroll />
                    </div>
                    <hr />
                    <div className='cards'>
                        {loading ? (
                            
                            <>
                                <Card items={[]} />
                                <Card items={[]} />
                                <Card items={[]} />
                                <Card items={[]}/>
                                <Card items={[]}/>
                            </>
                        ) : (
                            <Card items={products} />
                        )}
                    </div>
                </section>
                
            </main>
        </>
    );
}
