
### 1. Introduction à React et aux Objectifs du Cours

- **Présentation de React** : Une introduction rapide à React, ses principes de base, et pourquoi il est populaire pour le développement d'applications web modernes.
- **Objectifs du Cours** :
  - Comprendre et implémenter des variables calculées dans React.
  - Apprendre à créer et gérer des filtres pour manipuler des données.
  - Implémenter la pagination pour améliorer la gestion des grandes quantités de données.

### 2. Variables Calculées

- **Définition et Utilisation** : Explication de ce que sont les variables calculées, souvent appelées *derived states* ou états dérivés en React, et comment elles permettent de créer des états qui dépendent d'autres états.
- **Exemples Pratiques** :
  - Utilisation de `useMemo` pour optimiser les calculs coûteux.
  - Création de variables qui se mettent à jour en réponse à des changements d'état spécifiques.

### 3. Filtres dans React

- **Gestion des Entrées Utilisateur pour les Filtres** : Comment recueillir les inputs utilisateur pour influencer le dataset.
- **Implémentation de Filtres** :
  - Utilisation de fonctions JavaScript comme `filter()` pour traiter les données.
  - Création d'une interface utilisateur permettant aux utilisateurs de spécifier leurs critères de filtrage.
- **Cas Pratique** : Filtrer une liste de produits dans un e-commerce en fonction de catégories ou de prix.

### 4. Pagination

- **Principes de la Pagination** : Pourquoi la pagination est cruciale dans la gestion des performances d'applications web traitant de grandes quantités de données.
- **Mise en Place de la Pagination** :
  - Détermination du nombre d'éléments par page.
  - Création des boutons de navigation de pagination.
- **Exemples de Code** :
  - Utilisation de bibliothèques comme `react-paginate` pour implémenter facilement la pagination.
  - Exemple de pagination côté client avec des hooks comme `useState` et `useEffect`.


---
# Partie1 - création de l'application , ajout des filtres et de la pagination: 

Voici un cours structuré sur les variables calculées, les filtres et la pagination dans une application React, avec des exemples de code pour chacun de ces aspects.

### 1. **Objectifs du Cours**
Ce cours vise à apprendre à:
- Utiliser des variables calculées pour optimiser les performances.
- Appliquer des filtres pour améliorer l'expérience utilisateur.
- Implémenter la pagination pour gérer de grandes quantités de données.

### 2. **Variables Calculées avec `useMemo`**
Les variables calculées, ou "computed properties", permettent de recalculer des valeurs uniquement lorsque certaines dépendances changent, réduisant ainsi les opérations coûteuses.

**Exemple :**
```jsx
import React, { useState, useMemo } from 'react';

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product => product.category.toLowerCase().includes(filter.toLowerCase()));
  }, [products, filter]);

  return (
    <div>
      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by category" />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};
```

### 3. **Filtres**
Le filtrage est une fonction essentielle dans les applications qui traitent des collections d'objets, permettant aux utilisateurs de trouver rapidement ce qu'ils recherchent.

**Exemple :**
```jsx
// Utilisation du composant ProductList défini ci-dessus pour filtrer les produits par catégorie.
```

### 4. **Pagination des Données**
La pagination est une technique qui consiste à diviser les données en pages, ce qui réduit le temps de chargement et améliore l'expérience utilisateur en ne montrant qu'une petite partie des données à la fois.

**Exemple :**
```jsx
import React, { useState } from 'react';

const PaginatedProducts = ({ products, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <ul>
        {currentProducts.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
```

### 5. **Intégration dans l'App**
Combinons les concepts de variables calculées, filtres et pagination dans notre application principale pour démontrer leur utilité ensemble.

**Exemple :**
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import PaginatedProducts from './PaginatedProducts';

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliance', price: 250 },
  { id: 3, name: 'Book', category: 'Books', price: 20 },
  // Plus de produits...
];

const App = () => {
  return (
    <div>
      <ProductList products={products} />
      <PaginatedProducts products={products, itemsPerPage=10} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Conclusion
Ce cours démontre comment utiliser efficacement les variables calculées, les filtres et la pagination pour créer des applications React robustes et performantes. Ces techniques sont cruciales pour manipuler et présenter efficacement de grandes quantités de données dans les applications web modernes.

-----------------
# Partie 2 - Contexte React + Outlet

### Cours sur le Contexte React et le Routage avec Contenu Partagé

#### 6. **Objectifs du Module**
Ce module explore le Contexte React et le routage avec contenu partagé, en se concentrant sur :
- La création et la consommation de contexte pour partager des données à travers l'application.
- L'utilisation du routage pour naviguer entre les pages tout en partageant du contenu via `Outlet`.

#### 7. **Le Contexte React**
Le Contexte React est un moyen efficace de partager des données entre composants sans passer explicitement des props à chaque niveau de l'arborescence.

**Pourquoi utiliser le Contexte React ?**
- Pour éviter le "prop-drilling" où les données sont passées de parent en enfant à travers plusieurs niveaux.
- Pour partager des états globaux comme les préférences utilisateurs, le thème, ou les informations d'authentification.

**Comment créer et consommer un contexte ?**

**Exemple de Création :**
```jsx
import React, { createContext, useContext, useState } from 'react';

// Création du Contexte
const ProductContext = createContext();

// Provider du contexte
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
```

**Exemple de Consommation :**
```jsx
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name} - ${product.price}</li>
      ))}
    </ul>
  );
};
```

#### 8. **Routage avec Contenu Partagé**
Le routage dans les applications React permet de naviguer entre différentes vues. L'`Outlet` de `react-router-dom` est utilisé pour rendre des composants enfants dans une mise en page commune.

**Pourquoi utiliser le Routage avec `Outlet` ?**
- Pour structurer l'application en différentes pages sans recharger la page.
- Pour maintenir une mise en page constante tout en changeant le contenu spécifique à une route.

**Comment intégrer le Routage avec `Outlet` ?**

**Exemple :**
```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './ProductContext';
import ProductList from './ProductList';
import Home from './Home';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="products" element={<ProductList />} />
            {/* Outlet sera utilisé ici pour rendre 'ProductList' sous 'Home' */}
          </Route>
        </Routes>
      </ProductProvider>
    </Router>
  );
};

export default App;
```

**Home Component avec `Outlet` :**
```jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <Outlet /> {/* Ici, l'Outlet rendra 'ProductList' selon la route active */}
    </div>
  );
};
```

### Conclusion
Dans ce module, nous avons appris comment utiliser le Contexte React pour gérer l'état global et comment intégrer le routage dans une application React pour créer des applications web modernes et interactives. Les concepts d'`Outlet` et de contexte sont essentiels pour des applications évolutives et maintenables.
