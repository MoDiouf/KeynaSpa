import React, { useState } from 'react';
import './../Styles/admin.scss';

export function AdminPage() {
    const [addFormData, setAddFormData] = useState({
        productName: '',
        productPrice: '',
        productQuantity: '',
        productImage: '',
        productLink: ''
    });

    const [removeFormData, setRemoveFormData] = useState({
        productName: '',
        productPrice: '',
        
    });

    
    const handleAddChange = (event) => {
        const { name, value } = event.target;
        setAddFormData(prevState => ({
           ...prevState,
            [name]: value
        }));
    };

    
    const handleAddSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/stock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addFormData),
            });

            const data = await response.text();
            console.log(data);

        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    
    const handleRemoveChange = (event) => {
        const { name, value } = event.target;
        setRemoveFormData(prevState => ({
           ...prevState,
            [name]: value
        }));
    };

   
    const handleRemoveSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/updateStock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(removeFormData),
            });

            const data = await response.text();
            console.log(data);

        } catch (error) {
            console.error('Erreur:', error);
        }
    };
    const sendNewsLetter = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/sendNews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });

            const data = await response.text();
            console.log(data);

        } catch (error) {
            console.error('Erreur:', error);
        }
    };
    

    return (
        <>
            <h1 className='admin'>Bienvenue Administrateur</h1>
            
            <section className='Prod'>
                <div className='Ajout'>
                    <h3>Ajouter des produits</h3>
                    <form className="product-form" action="/submit_product" method="post" encType="multipart/form-data" onSubmit={handleAddSubmit}>
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Nom du Produit" name="productName" id="product_name" value={addFormData.productName} onChange={handleAddChange} required />
                            <label htmlFor="product_name" className="form__label">Nom du Produit</label>
                        </div>

                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Prix" name="productPrice" id="product_price" value={addFormData.productPrice} onChange={handleAddChange} required />
                            <label htmlFor="product_price" className="form__label">Prix</label>
                        </div>

                        <div className="form__group field">
                            <input type="number" className="form__field" placeholder="Quantité" name="productQuantity" id="product_quantity" min="1" value={addFormData.productQuantity} onChange={handleAddChange} required />
                            <label htmlFor="product_quantity" className="form__label">Quantité</label>
                        </div>

                        <div className="form__group field">
                            <input type="file" className="form__field" placeholder="Image du Produit" name="productImage" id="product_image" onChange={handleAddChange}  />
                            <label htmlFor="product_image" className="form__label">Image du Produit</label>
                        </div>

                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Lien du Produit" name="productLink" id="product_link" value={addFormData.productLink} onChange={handleAddChange} />
                            <label htmlFor="product_link" className="form__label">Lien de l'image du produit</label>
                        </div>

                        <input className='envoyer' type="submit" value="Ajouter" />
                    </form>
                </div>
                <div className='Ajout'>
                    <h3>Supprimer des produits</h3>
                    <form className="product-form" action="/submit_product" method="post" encType="multipart/form-data" onSubmit={handleRemoveSubmit}>
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Nom du Produit" name="productName" id="product_name" value={removeFormData.productName} onChange={handleRemoveChange} required />
                            <label htmlFor="product_name" className="form__label">Nom du Produit</label>
                        </div>

                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Prix" name="productPrice" id="product_price" value={removeFormData.productPrice} onChange={handleRemoveChange} required />
                            <label htmlFor="product_price" className="form__label">Prix</label>
                        </div>
                        <input className='envoyer' type="submit" value="Supprimer" />
                    </form>
                </div>
            </section>
            <section>
                <h1>News Letters</h1>
                <form action="" method='post' onSubmit={sendNewsLetter}>
                    <input type="file" />
                    <input type="text" placeholder='Lien'/>
                    <textarea name="" id="" placeholder='message' required></textarea>
                </form>
            </section>
        </>
    );
}
