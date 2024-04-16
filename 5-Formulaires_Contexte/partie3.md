Pour continuer le développement de notre application React, intégrons maintenant des fonctionnalités liées à la gestion des formulaires, notamment la création, la validation, l'accessibilité, ainsi que la gestion des données de formulaire avec `useState` et l'utilisation de `useParams` pour le routage. Nous nous concentrerons sur un formulaire de recherche qui permet aux utilisateurs de filtrer les produits par catégorie, en améliorant notre gestion actuelle du filtre.

### Étape 1 : Création du Formulaire de Recherche

Nous allons modifier le composant `FilterInput.js` pour inclure un formulaire plus structuré avec validation simple et accessibilité.

**FilterInput.js** :
```jsx
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const FilterInput = () => {
  const { filter, setFilter } = useContext(ProductContext);

  const handleSubmit = (event) => {
    event.preventDefault();  // Prévenir le rechargement de la page
    console.log("Filtering with:", filter);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Product Filter">
      <label htmlFor="filter" aria-label="Filter products by category">Search by Category:</label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Enter category"
      />
      <button type="submit">Apply Filter</button>
    </form>
  );
};

export default FilterInput;
```

### Étape 2 : Utilisation de `useParams`

Supposons que vous souhaitez également permettre aux utilisateurs de filtrer les produits via l'URL, en utilisant des paramètres de route. Nous allons ajouter une route qui capture un paramètre et le transmet au contexte.

**Mise à jour de App.js pour inclure useParams** :
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { ProductProvider } from './components/ProductContext';
import PaginatedProducts from './components/PaginatedProducts';
import FilterInput from './components/FilterInput';

const FilterRoute = () => {
  let { category } = useParams();
  return <FilterInput initialCategory={category} />;
};

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<FilterInput />} />
          <Route path="/filter/:category" element={<FilterRoute />} />
          <Route path="/products" element={<PaginatedProducts itemsPerPage={5} />} />
        </Routes>
      </ProductProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

Dans `FilterInput.js`, nous utilisons `initialCategory` pour définir le filtre si un paramètre est passé via l'URL.

**Modification de FilterInput.js pour utiliser initialCategory** :
```jsx
import React, { useContext, useEffect } from 'react';
import { ProductContext } from './ProductContext';

const FilterInput = ({ initialCategory = '' }) => {
  const { filter, setFilter } = useContext(ProductContext);

  useEffect(() => {
    if (initialCategory) setFilter(initialCategory);
  }, [initialCategory, setFilter]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Filtering with:", filter);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Product Filter">
      <label htmlFor="filter" aria-label="Filter products by category">Search by Category:</label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Enter category"
      />
      <button type="submit">Apply Filter</button>
    </form>
  );
};

export default FilterInput;
```

### Conclusion

Avec ces modifications, votre application React gère désormais un formulaire de recherche avancé qui utilise `useState` pour la gestion des données de formulaire et `useParams` pour permettre la filtration basée sur l'URL. Cela enrichit l'expérience utilisateur en offrant une interaction plus dynamique et accessible, tout en prenant en charge la navigation par URL.
