import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/panier.css";
import { usePanier } from "./PanierContext";
import { FaTrash } from "react-icons/fa";

export function Panier() {
    const { panier, removeProduct, updateItemQuantity } = usePanier();
    const [adresse, setAdresse] = useState({
        lieu: "",
        telephone: "",
    });
    const [vide, setVide] = useState(true);
    const Navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // État de connexion

    useEffect(() => {
        if (panier.length !== 0) {
            setVide(false);
        } else {
            setVide(true);
        }

        // Vérifier si l'utilisateur est connecté
        const token = localStorage.getItem("token"); // Exemple de récupération du token JWT
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [panier]);

    const commander = async () => {
        console.log(isLoggedIn);
        if (isLoggedIn) {
            try {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        panier,
                        adresseLivraison: adresse,
                        total: panier.reduce((acc, item) => acc + item.sousTotal, 0),
                    }),
                    
                };

                const response = await fetch("http://localhost:5000/api/payment/request", requestOptions);
                if (!response.ok) {
                    throw new Error("Erreur lors de la demande de paiement");
                }

                const responseData = await response.json();
                if (responseData.success) {
                    window.open(responseData.redirect_url, '_blank')
                } else {
                    console.error("Erreur lors de la demande de paiement:", responseData.error);
                    // Gérer l'erreur de la demande de paiement ici
                }
            } catch (error) {
                console.error("Erreur lors de la demande de paiement:", error);
                // Gérer l'erreur de la demande de paiement ici
            }
        } else {
            Navigate("/connexion");
        }
    };

    const Lieu = (e) => {
        setAdresse({ ...adresse, lieu: e.target.value });
    };

    const Telephone = (e) => {
        setAdresse({ ...adresse, telephone: e.target.value });
    };

    return (
        <section className="panier">
            <h1>Panier</h1>

            {vide ? (
                <div className="empty">Panier Vide</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Produit</th>
                            <th>Quantite</th>
                            <th>Prix</th>
                            <th>Sous-Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {panier.map((item) => (
                            <tr key={item.id}>
                                <td className="trash" onClick={() => removeProduct(item.id)}>
                                    <FaTrash />
                                </td>
                                <td>
                                    <img style={{ width: "50px" }} src={item.lien} alt="" />
                                </td>
                                <td>{item.nom}</td>
                                <td>
                                    <input
                                        className="inputPanier"
                                        type="number"
                                        value={item.quantite}
                                        min="1"
                                        step="1"
                                        size="4"
                                        placeholder=""
                                        inputMode="numeric"
                                        onChange={(e) =>
                                            updateItemQuantity(item.id, parseInt(e.target.value))
                                        }
                                    />
                                </td>
                                <td>{item.prix} fcfa</td>
                                <td>{item.sousTotal} fcfa</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <table>
                <tbody>
                    <tr>
                        <th>Adresse Client</th>
                        <td>
                            <input
                                type="text"
                                value={adresse.lieu}
                                onChange={Lieu}
                                placeholder="Votre Adresse"
                            />
                        </td>
                        <td>
                            <input
                                type="tel"
                                value={adresse.telephone}
                                onChange={Telephone}
                                placeholder="Numero de Téléphone"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="total">
                <tbody>
                    <tr>
                        <td className="final">Total</td>
                        <td className="final">
                            {panier.reduce((acc, item) => acc + item.sousTotal, 0)} fcfa
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={commander} className="myButton">
                                Commander
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
