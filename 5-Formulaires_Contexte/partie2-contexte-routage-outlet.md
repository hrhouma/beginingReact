# Partie2- Ajout du contexte, routage et outlet : 

Nous allons progressivement ajouter le contexte et le routage, en veillant à ce que chaque étape soit claire et que le projet reste cohérent.

### 1. Récapitulation de la Base

Avant d'ajouter de nouvelles fonctionnalités, voici un bref rappel de ce que contient déjà votre projet :

- **FilterInput.js** : Un composant pour filtrer les produits par catégorie.
- **PaginatedProducts.js** : Un composant pour afficher les produits avec une pagination.
- **App.js** : Le composant racine qui utilise les deux composants ci-dessus.

### 2. Ajout du Contexte React

Nous allons commencer par introduire un contexte pour partager les données des produits et le filtre à travers l'application.

**2.1 Création du Contexte**

Créez un nouveau fichier `ProductContext.js` pour définir votre contexte.

```jsx
import React, { createContext, useState, useMemo } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [filter, setFilter] = useState('');
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Coffee Maker', category: 'Home Appliance', price: 250 },
    { id: 3, name: 'Book', category: 'Books', price: 20 },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => product.category.toLowerCase().includes(filter.toLowerCase()));
  }, [products, filter]);

  return (
    <ProductContext.Provider value={{ filter, setFilter, filteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
```

**2.2 Mise à jour de App.js pour Utiliser le ProductProvider**

Modifiez `App.js` pour inclure le `ProductProvider` autour de vos composants existants.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ProductProvider } from './components/ProductContext';
import PaginatedProducts from './components/PaginatedProducts';
import FilterInput from './components/FilterInput';

const App = () => {
  return (
    <ProductProvider>
      <FilterInput />
      <PaginatedProducts itemsPerPage={5} />
    </ProductProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### 3. Intégration du Routage

**3.1 Installation de React Router**

Assurez-vous d'abord d'avoir installé `react-router-dom`.

```bash
npm install react-router-dom
```

**3.2 Configuration des Routes**

Modifiez le `App.js` pour configurer les routes de base de votre application.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './components/ProductContext';
import PaginatedProducts from './components/PaginatedProducts';
import FilterInput from './components/FilterInput';

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<FilterInput />}>
            <Route index element={<PaginatedProducts itemsPerPage={5} />} />
          </Route>
        </Routes>
      </ProductProvider>
    </Router>
  );
};

export default App;
```

**3.3 Utilisation d'Outlet pour le Routage Dynamique**

Dans `FilterInput.js`, incluez un `Outlet` pour charger les composants enfants configurés dans le routage.

```jsx
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ProductContext } from './ProductContext';

const FilterInput = () => {
  const { filter, setFilter } = useContext(ProductContext);
  
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by category"
      />
      <Outlet />
    </div>
  );
};

export default FilterInput;
```

### 4.  Vue d'ensemble
Pour clôturer et vous donner une vue d'ensemble claire de la structure actuelle de votre projet React avec les dernières intégrations de contexte et de routage, voici le diagramme de la structure de dossier mise à jour :

```
react-filters-pagination/
├── src/
│   ├── components/
│   │   ├── FilterInput.js      # Gère l'entrée pour le filtre de produits.
│   │   ├── PaginatedProducts.js # Affiche les produits avec pagination.
│   │   ├── ProductList.js      # Liste les produits filtrés et paginés.
│   │   └── ProductContext.js   # Fournit le contexte pour les produits et le filtre.
│   ├── App.js                  # Composant racine, configure le routage et le contexte.
│   └── index.js                # Point d'entrée React, monte l'App sur le DOM.
├── public/
│   └── index.html              # HTML de base pour le projet.
└── package.json                # Gère les dépendances et scripts du projet.
```

Ce diagramme montre comment votre application est structurée en termes de fichiers et de dossiers, permettant une meilleure organisation et facilitant la maintenance et l'expansion futures du projet. Chaque fichier a un rôle clair et spécifique, ce qui est crucial dans un projet de développement moderne avec React. Cette structure vous permettra de continuer à développer des fonctionnalités supplémentaires de manière ordonnée.

### 4. Conclusion

Avec ces étapes, votre application React intègre désormais un contexte pour partager les données entre les composants et utilise le routage pour organiser la navigation. Chaque étape est construite sur la précédente, en ajoutant progressivement des fonctionnalités pour rendre l'application plus modulaire et flexible. Ce format pas à pas est idéal pour un environnement d'apprentissage, car il montre clairement comment les concepts s'intègrent dans un projet réel.
