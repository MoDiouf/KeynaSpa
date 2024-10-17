const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const port = 5000

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sword@rtonline',
    database: 'ecommerce'
});


db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

app.use(express.json());
app.use(cors());

app.post('/stock', (req, res) => {
    const {productName,productPrice,productQuantity,productImage,productLink  } = req.body;
    console.log(productLink);
    const sql = 'INSERT INTO produits (nom, prix,quantite,image,lien) VALUES (?,?,?,?,?)';
    db.query(sql,[productName,productPrice,productQuantity,productImage,productLink ], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'ajout de du produit:', err);
        res.status(500).send('Erreur de serveur');
        return;
      }
      res.status(201).send('Produit ajouté');
    });
})

app.get('/produits',(req,res)=>{
    const sql ="SELECT * from produits";
    db.query(sql,(err,resultat)=>{
        if (err) {
            throw err
        }
        res.status(200).json(resultat)
    })
})

app.post('/updateStock',(req,res)=>{
    const {productName,productPrice}=req.body
    const sql = "DELETE FROM produits WHERE nom =? AND prix =?";

    
    db.query(sql, [productName, productPrice], (err, resultat) => {
        if (err) {
            
            return res.status(500).send("Erreur lors de la suppression du produit");
        }

        res.status(200).send('Produit supprimé avec succès');
    });
    
})

app.post('/api/payment/request', async (req, res) => {
  try {
      const paymentRequestUrl = "https://paytech.sn/api/payment/request-payment";
      const { body } = req;
    

    const commandReference = uuidv4();

    let params = {
      item_name:"Produit Cosmetique",
      item_price:body.total,
      currency:"XOF",
      ref_command:commandReference,
      command_name:"Produit Cosmetique",
      env:"test",
      ipn_url:"https://domaine.com/ipn",
      success_url:"https://domaine.com/success",
      cancel_url:"https://domaine.com/cancel",
      custom_field:JSON.stringify({
         custom_fiel1:"value_1",
         custom_fiel2:"value_2",
      })
      };
  
      const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          API_KEY: "c6c4e3922fb4478f8297a8d32f67f590b64daf979230948cbbdc40a513a02f35",
          API_SECRET: "676234086cda0c649fe35f7dcf32d697543311878cc038e7a97532256d72dd24",
      };

      const response = await fetch(paymentRequestUrl, {
          method: "POST",
          body: JSON.stringify(params),
          headers: headers,
      });

      const jsonResponse = await response.json();
      console.log(jsonResponse);
      res.json(jsonResponse);
  } catch (error) {
      console.error("Erreur lors de la demande de paiement:", error);
      res.status(500).json({ error: "Erreur lors de la demande de paiement" });
  }
});

app.post('/googleSignUp', (req, res) => {
    const decodedData = req.body;
    console.log(decodedData);
    
    const { email, name, password } = decodedData.decoded;
    
    
    const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkEmailQuery, [email], (err, rows) => {
      if (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Erreur interne du serveur" });
      } else {
        if (rows.length > 0) {
          
          res.status(400).json({ error: "L'email est déjà enregistré" });
        } else {
          
          const insertUserQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
          db.query(insertUserQuery, [name, email, password], (err, result) => {
            if (err) {
              console.error("Database error:", err);
              res.status(500).json({ error: "Erreur interne du serveur" });
            } else {
              console.log('Données enregistrées avec succès');
              res.status(200).json({ message: 'Données reçues et traitées avec succès sur le backend' });
            }
          });
        }
      }
    });
  });
  


  app.post('/traditionalSignUp', (req, res) => {
    const state = req.body;
    console.log(state.name);
    const email=state.email 
    const name=state.name 
    const password=state.sub 
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    
    db.query(sql,[name,email,password],(err,resultat)=>{
        if (err) {
            throw err
        }else{
            console.log('Données enregistrer avec succes');
        }
    })
    res.status(200).json({ message: 'Données reçues et traitées avec succès sur le backend' });
  });

  app.post('/googleSignIn', (req, res) => {
    const { sub, email } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  
    db.query(sql, [email, sub], (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send("Erreur interne du serveur");
      }
  
      if (results.length === 0) {
        return res.status(404).send("Utilisateur introuvable");
      }
  
      res.status(200).send("Utilisateur trouvé");
    });
  });

  app.post('/TradSignIn', (req, res) => {
    const { password, email } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).send("Erreur interne du serveur");
        }
  
        if (results.length === 0) {
            return res.status(404).send("Utilisateur introuvable");
        }
  
        // Utilisateur trouvé, génération du token JWT
        const user = results[0];
        const token = jwt.sign({ userId: user.id, email: user.email }, 'popopopopo', { expiresIn: '10s' }); // Changez 'your_jwt_secret' avec votre clé secrète
        
        // Envoyer le token JWT en réponse
        res.status(200).json({ token });
    });
});
  

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error("Erreur lors de la requête SQL :", err);
            res.status(500).json({ error: "Une erreur s'est produite lors de l'authentification" });
        } else {
            if (results.length > 0) {
                res.status(200).json({ success: true });
            } else {
                res.status(401).json({ error: "Nom d'utilisateur ou mot de passe incorrect" });
            }
        }
    });
});

app.post('/news',(req,res)=>{
    const {email} = req.body
    const sql="INSERT INTO newsletter (email) value (?)"
    db.query(sql,[email],(err,res)=>{
        if(err){
            throw err
        }
        res.status(200).send('Email ajouté avec succès')
    })
})

app.listen(port, () => {
    console.log("Serveur demarrer sur le port " + port);
})
