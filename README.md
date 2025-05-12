<img width="1280" alt="Capture d’écran 2025-05-12 à 13 42 15" src="https://github.com/user-attachments/assets/f3dba416-d95d-4065-95c7-1ff82e4cf652" /># KeynaSpa - Backend

Backend for the KeynaSpa project, a basic e-commerce platform built with Node.js, Express, and MySQL. This backend provides routes for managing products, users, admins, and newsletters, as well as integration with the PayTech payment API.

## Prerequisites

Ensure you have the following installed:

* Node.js (v18+ recommended)
* MySQL (v8.0+)

## Database Setup

### Create the Database and Tables

```sql
CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

-- Table produits
CREATE TABLE IF NOT EXISTS produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prix DECIMAL(10,2) NOT NULL,
    quantite INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    lien VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table admin
CREATE TABLE IF NOT EXISTS admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table newsletter
CREATE TABLE IF NOT EXISTS newsletter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample admin user
INSERT INTO admin (username, password) VALUES ('admin', 'admin123');

-- Update root authentication (if needed)
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Sword@rtonline';
FLUSH PRIVILEGES;
```

## Installation

Clone the repository and install the required packages:

```bash
cd Back-end
npm install
```

## Running the Application

Start the server:

```bash
node index.js
```

If you want to use `nodemon` for automatic restarts:

```bash
npm install -g nodemon
nodemon index.js
```

## API Endpoints

* **Add a Product:** `POST /stock`
* **Get All Products:** `GET /produits`
* **Update Product Stock:** `POST /updateStock`
* **Request Payment:** `POST /api/payment/request`
* **Google Sign-Up:** `POST /googleSignUp`
* **Traditional Sign-Up:** `POST /traditionalSignUp`
* **Google Sign-In:** `POST /googleSignIn`
* **Traditional Sign-In:** `POST /TradSignIn`
* **Admin Login:** `POST /login`
* **Newsletter Subscription:** `POST /news`

## Environment Variables

Ensure the following environment variables are correctly set:

* `API_KEY` (PayTech API key)
* `API_SECRET` (PayTech API secret)




## License

This project is licensed under the MIT License.
<img width="1280" alt="Capture d’écran 2025-05-12 à 13 41 47" src="https://github.com/user-attachments/assets/23e28543-acb2-4276-9c2c-e25e51afa709" />
<img width="1280" alt="Capture d’écran 2025-05-12 à 13 42 15" src="https://github.com/user-attachments/assets/e4a33eb5-c35e-48cb-9077-74b8cb0e49bf" />
