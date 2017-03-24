# Tournois Sports

## Dépendances

* Node.js
* Aurelia-cli
* Pour installer les dépendances serveur: `npm install` dans la racine du projet
* Pour installer les dépendances client: `npm install` dans le fichier public/

## Serveur
* app.js est utilisé pour configurer le serveur et se connecter au base de données
* bin/www est utilisé pour débuter le serveur
* routes/* sont où ce qu'on fait les requêtes BD
* Pour débuter le server: `npm start`

## Client
* Situé dans public/src
* models/* sont les objets utilisés (i.e. usager.js, employe.js)
* views/* sont les différentes pages
* services/* sont les appèles http vers le serveur
* Pour débuter le client sur Browser Sync (pour que la page recharge automatiquement avec les changements): `au run --watch`
