#HETIC_chat

Mise en place d'une application de chat. 

*Créer un fichier pour le serveur (server.js)

*Initialiser le dossier serveur (npm init)

*Importer les composants : express, body-parser, dotenv, ejs, mongoose, path, nodemon (npm i -s)

*Dans package.json, ajouter nodemon à la place de node server js

*Créer un fichier .gitignore (node_modules/)

*Configurer le fichier serveur :

- Créer une constante pour les imports (avec require) (attention à dotenv)
- Créer une constante pour le serveur (utilisation de la fonction express) : protéger le port
- Créer un fichier .env et le protéger avec gitignore
- Configurer les composants importés 
- Lancer le serveur avec l'écouteur et ensuite dans le terminal (npm start)

*Configurer les vues clients

- Définir le moteur de rendu en ejs
- Définir un dossier "www" comme étant le dossier client
- Créer un fichier "index.ejs" dans le dossier "www"
- Créer un router front : créer les routes homepage, créer le route register, créer la route login, créer la route chat


*Création de l'API
- Créer un fichier de routes pour l'api (cf. front.routes)
- Créer une route "register"
- Créer une route "login"

*Création de formulaire register/login (en include) (nouvelle page form-register.ejs)
- Le formulaire d'inscription contient : email, pseudo, password x2, cgu,
- Le formulaire de connexion contient : email, password



