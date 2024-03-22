# Construction d'une application React pour afficher une liste de citations inspirantes en utilisant l'API Quotes pour illustrer l'utilisation de `react-router-dom`, `useState`, et `useEffect`. 

Cette application aura plusieurs pages pour montrer différentes façons d'utiliser ces hooks, avec une complexité croissante pour les démonstrations de `useEffect`.

### Objectif de l'exercice

Construire une application React qui utilise `react-router-dom` pour la navigation entre différentes pages : une page d'accueil, une page pour ajouter une citation favorite (démonstration de `useState`), et trois pages distinctes pour illustrer différents niveaux de complexité de `useEffect` liés à la récupération et l'affichage de citations inspirantes depuis une API externe.

### Prérequis

- Avoir une installation de base de React (`create-react-app`).
- Installer `react-router-dom` pour la navigation et `axios` ou `fetch` pour les appels API.

### Configuration initiale

1. **Configuration de React Router dans votre application :**
   - Dans votre composant `App.js`, utilisez `BrowserRouter`, configurez un `Switch` et définissez des `Route`s pour chacune de vos pages : `Home`, `AddQuote`, `ShowQuotes1`, `ShowQuotes2`, `ShowQuotes3`.
   - Ajoutez un menu de navigation avec `NavLink` pour chaque page.

2. **Page d'accueil (`Home`) :**
   - Créez une page d'accueil simple avec un message de bienvenue et des instructions pour naviguer vers les autres pages.

3. **Ajouter une citation (`AddQuote`) - Utilisation de `useState` :**
   - Sur cette page, permettez à l'utilisateur d'entrer une citation et l'auteur dans un formulaire et d'afficher la citation ajoutée en dessous du formulaire.
   - Utilisez `useState` pour gérer les valeurs du formulaire.

### Utilisation de `useEffect` pour afficher des citations

4. **Afficher des citations (`ShowQuotes1`) - Niveau Basique :**
   - Utilisez `useEffect` pour charger une citation aléatoire de l'API Quotes (par exemple, `https://api.quotable.io/random`) au montage du composant. Affichez cette citation dans le composant.
   - Utilisez `useState` pour stocker la citation récupérée.

5. **Afficher des citations avec actualisation (`ShowQuotes2`) - Niveau Intermédiaire :**
   - Modifiez le composant précédent pour inclure un bouton "Charger une nouvelle citation" qui, lorsqu'il est cliqué, charge une nouvelle citation aléatoire de l'API.
   - Utilisez `useEffect` avec des dépendances appropriées pour gérer la mise à jour des citations.

6. **Afficher une liste de citations (`ShowQuotes3`) - Niveau Avancé :**
   - Créez un composant qui, au montage, charge plusieurs citations (par exemple, les 10 dernières citations de `https://api.quotable.io/quotes?page=1&limit=10`).
   - Affichez ces citations dans une liste et utilisez `useState` pour stocker les citations.
   - Ajoutez la gestion des états de chargement et d'erreur pour améliorer l'expérience utilisateur.

### Considérations finales

- Pour les appels API, vous pouvez utiliser `fetch` intégré à JavaScript ou `axios` si vous préférez une bibliothèque externe.
- Assurez-vous de gérer correctement les erreurs d'API et d'afficher un message approprié en cas d'erreur.
- Pour les composants qui chargent des données, envisagez d'ajouter des indicateurs de chargement pour informer l'utilisateur que les données sont en cours de récupération.

En accomplissant cet exercice, vous obtiendrez une compréhension pratique de la navigation entre différentes pages dans une application React, de la gestion de l'état local avec `useState`, et de l'exécution d'effets secondaires avec `useEffect`, y compris la réalisation d'appels API.
