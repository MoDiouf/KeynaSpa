import React, { createContext, useContext, useState } from 'react';

const PanierContext = createContext();

export const usePanier = () => useContext(PanierContext);

export const PanierProvider = ({ children }) => {
    const [panier, setPanier] = useState([]);

    const removeProduct = (id) => {
        setPanier(panier.filter(item => item.id !== id));
    };

    const updateItemQuantity = (id, newQuantity) => {
        setPanier(panier.map(item => 
            item.id === id ? { ...item, quantite: newQuantity, sousTotal: newQuantity * item.prix } : item
        ));
    };

    return (
        <PanierContext.Provider value={{ panier, setPanier, removeProduct, updateItemQuantity }}>
            {children}
        </PanierContext.Provider>
    );
};
