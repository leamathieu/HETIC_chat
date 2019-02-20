//  ********************************* Imports *********************************

// On importe les constantes des composants importés
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser')

// On a dotenv qui est un peu différent au niveau de l'importation
require('dotenv').config();

//Inner (récupération des données de la page Router et de son chemin pour l'afficher)
const frontRouter = require('./routes/front.routes');
const apiRouter = require('./routes//api/api.routes');

// ********************************* Configuration *********************************

// On configure le serveur en créant une constante pour récupérer l'extension express et créer un port d'écoute
const server = express();
const port = process.env.PORT;

//On va créer une classe pour que tout soit propre
class ServerClass{
    init(){
        // // Configuration du dossier client : permet d'afficher correctement la page html
        server.set('views',__dirname +'/www');
        server.use(express.static(path.join(__dirname, "www")));

        // Configuration du moteur de rendu ejs
        server.set('view engine', 'ejs');

        //Configurer les routes
        
        server.use('/api', apiRouter);
        server.use('/', frontRouter);
        

        //Lancer le serveur 
        this.launch();
    }
    launch(){

        // Lancer le serveur : on met un écouteur 'listen" sur le port et on renvoie un message de confirmation de lancement
            server.listen(port, () => {
            console.log(`server is listening on port ${port}`)
})

    }
}


// ********************************* Lancement du serveur *********************************

new ServerClass().init();

