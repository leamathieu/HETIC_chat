//  ********************************* Imports *********************************

// On importe express
const express = require('express');

// On stocke dans une variable la fonction router pour regrouper les gestionnaires de routage 
// pour une partie particulière d'un site et d'y accéder à l'aide d'un préfixe de route commun
const Router = express.Router();

// ********************************* Définition *********************************

// On va appeler la fonction Router en utilisant la constante frontRouter
// On va l'utiliser avec la fonction .get qui utilise deux paramètres 
// Un routeur renvoie dans sa fonction de routeur obligatoirement deux paramètres : réponse et requête

//Homepage
Router.get('/',(req, res) => {
    res.render('index', { connected: false });
});

//Register
Router.get('/register',(req, res) => {
    res.render('register', { connected: false });
});

//Login
Router.get('/login',(req, res) => {
    res.render('login', { connected: false });
});

//Chat
Router.get('/chat',(req, res) => {
    res.render('chat', { connected: false });
});

// ********************************* Exports *********************************

module.exports = Router;

