## Configuration du Backend Express

1. **Cloner le Répertoire du Projet :**
   Commencez par cloner le répertoire :
   ```bash
   git clone <URL_du_dépôt>
   cd <nom_du_dossier>
   ```

2. **Installer les Dépendances :**
   Naviguez dans le dossier du backend Express et installez les dépendances nécessaires :
   ```bash 
   npm install
   ```

3. **Lancer le Serveur Express :**
   Démarrez le serveur Express pour qu'il écoute sur le port `5000` :
   ```bash
   node app.js
   ```
   Assurez-vous que le terminal reste ouvert pour garder le serveur actif.

## Développement de l'Application React

1. **Initialiser l'Application React :**
   Dans un nouveau terminal, créez une nouvelle application React (si ce n'est pas déjà fait) :
   ```bash
   npx create-react-app mon-app-react
   cd mon-app-react
   ```

2. **Installer Semantic UI React :**
   Pour utiliser Semantic UI dans votre application React, installez les packages nécessaires :
   ```bash
   npm install semantic-ui-react semantic-ui-css
   ```

3. **Configurer le CSS de Semantic UI :**
   Ajoutez le CSS de Semantic UI dans le fichier principal de votre application React `App.js` :
   ```javascript
   import 'semantic-ui-css/semantic.min.css';
   ```

4. **Développer l'Application :**
   Commencez à développer votre application en suivant les directives de l'exercice :
   - Créez des composants pour interagir avec le backend.
   - Utilisez `fetch` pour communiquer avec les routes `/quotes`, `/quotes/random`, et `/quotes/:id`.
   - Gérez l'état de l'application avec les hooks `useState` et `useEffect`.

5. **Exécuter l'Application React :**
   Lancez le serveur de développement de React pour voir votre application en action :
   ```bash
   npm start
   ```
   Cela ouvrira automatiquement votre navigateur par défaut à l'adresse `http://localhost:3000`.

## Test et Validation

1. **Test des Fonctionnalités :**
   Vérifiez que toutes les fonctionnalités de l'application fonctionnent comme attendu :
   - Le chargement de toutes les citations.
   - L'affichage d'une citation aléatoire.
   - La recherche de citations par ID.

2. **Correction des Problèmes :**
   Identifiez et corrigez les problèmes éventuels en consultant la console du navigateur et les logs du serveur.

3. **Documentation :**
   Rédigez une brève documentation sur comment utiliser votre application, incluant des captures d'écran ou des vidéos si nécessaire.

