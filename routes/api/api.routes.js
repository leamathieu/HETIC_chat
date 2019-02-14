//  ********************************* Imports *********************************

// On importe express
const express = require('express');

// On stocke dans une variable la fonction router pour regrouper les gestionnaires de routage 
// pour une partie particulière d'un site et d'y accéder à l'aide d'un préfixe de route commun
const apiRouter = express.Router();

// ********************************* Définition *********************************

apiRouter.post('/register', (req, res) => {
    res.json(register);
});

apiRouter.post('/login', (req, res) => {
    res.json(login);
});

// ********************************* Exports *********************************

module.exports = apiRouter;

