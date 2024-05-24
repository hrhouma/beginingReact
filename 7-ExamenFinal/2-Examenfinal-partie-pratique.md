# A - Énoncé

## 1 - Configuration du Backend Express

1. **Cloner le Répertoire du Projet :**
   Commencez par cloner le répertoire qui contient le serveur et les données des articles :
   ```bash
   git clone https://github.com/hrhouma/api-news-v1.git
   cd api-news-v1/
   ```

2. **Installer les Dépendances :**
   Naviguez dans le dossier du backend Express et installez les dépendances nécessaires :
   ```bash
   npm install
   ```
    ```bash
      npm install cors
    ```

3. **Lancer le Serveur Express :**
   Démarrez le serveur Express pour qu'il écoute sur le port `5000` :
   ```bash
   node app.js
   ```
   Assurez-vous que le terminal reste ouvert pour garder le serveur actif.


3. **Testez swagger :**
   Vérifiez les endpoints suivants :
   - `http://localhost:5000/api-docs/`
   - `http://localhost:5000/news`
   - `http://localhost:5000/news/random`
   - `http://localhost:5000/news/by-id/1`
   - `http://localhost:5000/news/by-date/2018-05-26`
   - `http://localhost:5000/news/by-category/ENTERTAINMENT`

## 2 - Développement de l'Application React

1. **Initialiser l'Application React :**
   Dans un nouveau terminal, créez une nouvelle application React :
   ```bash
   npx create-react-app mon-app-news
   cd mon-app-news
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

4. **Exécuter l'Application React :**
   Lancez le serveur de développement de React pour voir votre application en action :
   ```bash
   npm start
   ```
   Cela ouvrira automatiquement votre navigateur par défaut à l'adresse `http://localhost:3000`.


5. **Développer l'Application :**
   Commencez à développer votre application en suivant les directives de l'exercice :
   - Créez des composants pour interagir avec le backend.
   - Utilisez `fetch` pour charger initialement tous les articles de la route `/news` et communiquer avec les autres endpoints comme `/news/{id}`.
   - Gérez l'état de l'application avec les hooks `useState` et `useEffect`.

   **Fonctionnalités à Implémenter :**
   
   a. **Chargement Initial de Tous les Articles (20%) :**
      - À l'ouverture de l'application, tous les articles doivent être chargés et affichés. Cette fonctionnalité est la base pour permettre ensuite le filtrage, la recherche et la pagination.

   b. **Filtrage par Catégorie (20%) :**
      - Utilisez un composant `Select` pour permettre aux utilisateurs de filtrer les articles par catégorie (ENTERTAINMENT, POLITICS, etc.). Le menu déroulant devrait lister toutes les catégories disponibles et afficher uniquement les articles correspondants lorsqu'une catégorie est sélectionnée.

   c. **Recherche de Texte (20%) :**
      - Intégrez une barre de recherche où les utilisateurs peuvent entrer des mots-clés. Cette recherche doit filtrer les articles selon leur titre ou description. Les articles contenant les mots-clés dans ces champs doivent être affichés.

   d. **Pagination (20%) :**
      - Mettez en place une pagination pour afficher un nombre limité d'articles par page. Les utilisateurs doivent pouvoir naviguer entre les pages pour voir d'autres articles.



## 6 - Grille d'évaluation

1. **Test des Fonctionnalités :**
   Vérifiez que toutes les fonctionnalités de l'application fonctionnent comme attendu :
   - Le chargement de tous les articles (20%).
   - La fonctionnalité de filtrage par catégorie (20%).
   - La fonction de recherche de texte (20%).
   - La pagination des articles (20%).

2. **Qualité du Code (10%) :**
   Évaluez la clarté, l'organisation et la modularité du code. Les meilleures pratiques de codage, comme des noms de variables descriptifs et des commentaires pertinents, doivent être observées pour ce pourcentage de la note finale.
