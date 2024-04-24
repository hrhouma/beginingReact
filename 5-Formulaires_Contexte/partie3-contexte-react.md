# Partie3- Contexte React
## Application React avec Contextes Multiples

Cette application est un exemple simple conçu pour illustrer l'utilisation de plusieurs contextes dans une application React. Nous avons deux contextes : `SearchContext` pour la gestion de la recherche de produits et `ThemeContext` pour la gestion des thèmes de l'application.

## Structure du projet

Le projet est organisé comme suit :

```
mon-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── SearchBar.js      # Barre de recherche pour filtrer les produits
│   │   ├── ProductList.js    # Liste de produits filtrée en fonction de la recherche
│   │   └── ThemeToggle.js    # Bouton pour basculer entre les thèmes clair et sombre
│   │
│   ├── context/
│   │   ├── SearchContext.js  # Contexte pour la recherche de produits
│   │   └── ThemeContext.js   # Contexte pour le thème de l'application
│   │
│   ├── App.js                # Composant principal qui utilise les contextes
│   └── index.js              # Point d'entrée de React qui monte l'application dans le DOM
│
└── README.md                 # Ce fichier
```

## Composants

### `App.js`

Le composant racine qui utilise `ThemeProvider` et `SearchProvider` pour envelopper les composants enfants, leur permettant d'accéder aux valeurs de contexte correspondantes.

### `SearchBar.js`

Un composant qui utilise `useSearch` pour accéder au terme de recherche et à la fonction de mise à jour du `SearchContext`.

### `ProductList.js`

Un composant qui utilise `useSearch` pour filtrer et afficher une liste de produits basée sur le terme de recherche.

### `ThemeToggle.js`

Un composant qui utilise `useTheme` pour basculer entre les thèmes clair et sombre du `ThemeContext`.

## Contextes

### `SearchContext.js`

Crée un contexte pour la recherche de produits avec `useState` pour gérer le terme de recherche et sa mise à jour.

### `ThemeContext.js`

Crée un contexte pour le thème avec `useState` pour basculer entre les thèmes clair et sombre.

## Démarrage de l'application

Pour démarrer l'application, suivez ces étapes :

1. Clonez le dépôt ou téléchargez les fichiers du projet.
2. Ouvrez un terminal dans le dossier du projet.
3. Exécutez `npm install` pour installer les dépendances nécessaires.
4. Exécutez `npm start` pour lancer l'application en mode développement.
5. Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application dans le navigateur.

## Conclusion

Cet exemple démontre l'utilisation des contextes pour fournir un état global à différents composants d'une application React. Chaque contexte est responsable de sa propre logique d'état, ce qui facilite la gestion de l'état global et rend les composants plus réutilisables et maintenables.

