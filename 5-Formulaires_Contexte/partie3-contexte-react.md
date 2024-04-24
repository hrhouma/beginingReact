# Partie3- Contexte React
# 1 - Application React avec Contextes Multiples (Structure)

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

# 2 - CODE COMPLET

## ProductList.js
```jsx
import React from 'react';
import { useSearch } from '../context/SearchContext';

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Book', category: 'Books' },
  { id: 3, name: 'Coffee Maker', category: 'Appliances' }
];

const ProductList = () => {
  const { searchTerm } = useSearch();
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredProducts.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;
```

## SearchBar.js
```jsx
import React from 'react';
import { useSearch } from '../context/SearchContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search products..."
    />
  );
};

export default SearchBar;

```
## ThemeToggle.js
```jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

export default ThemeToggle;

```

## SearchContext.js
```jsx
import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

```

## ThemeContext.js
```jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Toggle the theme and update the body class
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // Update the body class on theme change
  useEffect(() => {
    document.body.className = theme + '-theme';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

```
## App.css
```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

## App.js
```jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SearchProvider } from './context/SearchContext';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ThemeToggle from './components/ThemeToggle';


const App = () => {
  return (
    <ThemeProvider>
      <SearchProvider>
        <ThemeToggle />
        <SearchBar />
        <ProductList />
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;

```

## index.css
```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.light-theme {
  background-color: #fff;
  color: #000;
}

.dark-theme {
  background-color: #333;
  color: #fff;
}

```


# 3 - Pourquoi utiliser un contexte ? Pensez-y !! 

Le contexte dans React (souvent référé par le terme anglais "Context") est une fonctionnalité qui permet de partager des valeurs (comme les données d'authentification, les préférences de thème, les données utilisateur, etc.) entre tous les composants de votre application sans avoir à passer explicitement les props à chaque niveau de l'arbre de composants.

En d'autres termes, le contexte vous permet de faire du "pass-through" des données, c'est-à-dire de transmettre des données à travers l'arbre de composants sans avoir à les passer manuellement à chaque composant enfant. C'est très utile pour des informations qui doivent être accessibles de manière globale dans une application, comme un mode sombre/clair, la langue actuelle, des informations d'utilisateur connecté, etc.

Voici comment ça fonctionne avec l'exemple que nous avons construit :

1. **Création du contexte** : Vous créez un contexte à l'aide de `React.createContext()`, ce qui vous donne un objet `Provider` et un `Consumer` (ou un Hook `useContext` dans les versions plus récentes de React). Le `Provider` est utilisé pour envelopper l'arbre de composants où les données doivent être accessibles, et il prend une prop `value` où vous mettez les données que vous voulez rendre disponibles.

2. **Fournir un contexte** : Vous utilisez le `Provider` pour envelopper votre arbre de composants. Tout composant enfant (peu importe à quel point il est profondément imbriqué) peut accéder aux données du contexte sans qu'elles soient passées explicitement. Vous pouvez avoir plusieurs Providers dans une application pour différents types de données.

3. **Consommer le contexte** : Les composants qui ont besoin des données contenues dans le contexte utilisent le `Consumer` ou le Hook `useContext` pour s'y abonner. Dans notre exemple, les composants `SearchBar` et `ThemeToggle` consomment le contexte pour utiliser respectivement le terme de recherche et la fonction de changement de thème.

4. **Mise à jour du contexte** : Lorsque les données du contexte sont mises à jour (par exemple, l'utilisateur bascule le thème), tous les composants consommateurs reçoivent la nouvelle valeur automatiquement. Cela déclenche un re-render des composants abonnés avec les nouvelles données fournies.

En utilisant le contexte, vous pouvez éviter ce qu'on appelle le "prop drilling" (la nécessité de passer des props à travers de nombreux niveaux de composants) et garder votre code plus propre et maintenable, en particulier pour les données qui doivent être largement accessibles dans toute votre application.


# 4 - Encore pas claire ?

Imaginez que vous vivez dans une grande maison de famille où vous avez une tradition de laisser un message quotidien sur un tableau dans le hall pour que tout le monde puisse le voir. Ce message pourrait être quelque chose comme "La soupe est chaude sur la cuisinière" ou "J'ai pris le dernier lait, merci d'en acheter". Ce tableau est essentiel car tout le monde dans la maison passe par le hall et peut voir le message, évitant ainsi à la personne qui a laissé le message de devoir aller dans chaque pièce pour informer chaque membre de la famille.

Dans cette analogie :

- La **grande maison de famille** représente votre application React.
- Le **message sur le tableau** représente les données que vous souhaitez partager (comme l'état du thème sombre/clair).
- Le **tableau dans le hall** est comme le `Context Provider` dans React. Il est accessible à tous et vous n'avez pas besoin d'informer chaque personne individuellement.
- Les **membres de la famille** qui lisent le message sont comme les composants React qui consomment le contexte. Ils peuvent "voir" (accéder) les données du contexte simplement parce qu'ils sont "dans la maison" (l'application) où le contexte est fourni.

Dans votre application React :

1. Vous **créez un contexte** (`React.createContext()`) comme si vous mettiez en place un tableau dans le hall.
2. Vous **fournissez un contexte** (`<Context.Provider value={...}>`) en écrivant votre message sur le tableau.
3. N'importe quel composant dans l'application peut **consommer le contexte** (`useContext(MyContext)`) comme si un membre de la famille lisait le message sur le tableau pour obtenir l'information.


# Question optionelle de recherche pour aller plus loin : contexte React vs `sessionStorage` vs Redux ?


Voici un tableau comparatif entre le contexte React, `sessionStorage` et Redux :

| Caractéristique       | Contexte React                      | sessionStorage                      | Redux                                         |
|-----------------------|-------------------------------------|-------------------------------------|-----------------------------------------------|
| Type                  | Mécanisme de React                  | API de stockage Web                 | Bibliothèque de gestion d'état                |
| Portée                | Composants dans l'arbre de React    | Onglet du navigateur                | Application entière                           |
| Persistance           | Non-persistant (seulement en mémoire) | Persiste pour la durée de la session de l'onglet | Non-persistant (peut être persisté avec middleware) |
| Utilisation           | Données qui changent rarement       | Stockage de données entre les pages | Gestion d'état complexe et centralisée        |
| Capacité de stockage  | Limitée par la mémoire de l'application | Environ 5 MB par domaine              | Limitée par la mémoire de l'application       |
| Structure des données | Peut utiliser n'importe quel type JavaScript | Seulement des chaînes de caractères (nécessite JSON.stringify/parse pour les objets) | Peut utiliser n'importe quel type JavaScript  |
| Réactivité            | Mise à jour immédiate dans l'UI     | Non-réactif par défaut               | Mise à jour immédiate et prévisible dans l'UI |
| Flux de données       | Descendant (top-down)               | Non applicable                       | Unidirectionnel                               |
| Outils de développement | Aucun spécifique à Context          | Aucun spécifique                     | Redux DevTools, middleware                    |
| Complexité            | Faible à moyenne                    | Faible                              | Moyenne à élevée                              |
| Configuration         | Minimale                            | Aucune                              | Requiert une configuration et un setup initial|
| Performance           | Bonne pour des utilisations simples | Impact négligeable                   | Optimisée pour des changements d'état fréquents|
| Utilisation typique   | Thèmes, authentification, préférences | Données de session, état de formulaire | États applicatifs globaux, logique d'affaires complexe |

- Ce tableau fournit un aperçu général des différences et des cas d'usage pour lesquels chaque solution pourrait être la mieux adaptée. 
- Le choix dépendra des besoins spécifiques de l'application et des préférences de l'équipe de développement.
