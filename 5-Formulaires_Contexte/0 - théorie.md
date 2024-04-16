
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

### 5. Conclusion et Projet de Fin de Cours

- **Récapitulatif des Concepts Appris** : Révision des principaux enseignements et compétences acquises.
- **Projet de Fin de Cours** : Développement d'une application utilisant des variables calculées, des filtres, et la pagination. Ce projet permettra de consolider les compétences apprises et de montrer comment ces éléments peuvent être intégrés de manière cohérente dans une application React.

### Matériaux Complémentaires

- Fournir des lectures supplémentaires, des tutoriels vidéo, et des ressources en ligne pour que les étudiants puissent approfondir leurs connaissances à leur propre rythme.

Ce cours peut être adapté pour des séances en ligne, des ateliers en personne, ou même des formats de vidéo à la demande, en fonction des besoins des apprenants et des ressources disponibles.

---
# Partie1 - création de l'application , ajout des filtres et de la pagination: 

Nous allons développer une application simple qui affiche une liste de produits avec la capacité de filtrer ces produits et de les paginer.

### 1. Introduction à l'Application

- Imaginons que nous développons une petite application de boutique en ligne qui affiche une liste de produits. 
- Les utilisateurs peuvent filtrer les produits par catégorie et paginer les résultats pour faciliter la navigation.

### 2. Configuration Initiale

Pour commencer, assurez-vous d'avoir créé un projet React :

```bash
npx create-react-app react-filters-pagination
cd react-filters-pagination
```

### 3. Variables Calculées avec `useMemo`

- Utilisons `useMemo` pour calculer une liste filtrée de produits basée sur la catégorie sélectionnée par l'utilisateur. 
- Ceci est un exemple typique d'une variable calculée.

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

### 4. Pagination des Données

Pour la pagination, nous divisons la liste des produits en plusieurs pages. Nous utiliserons `useState` pour garder la trace de la page actuelle.

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

### 5. Intégration dans l'App

Enfin, combinons les filtres et la pagination dans notre application principale.

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
      <PaginatedProducts products={products} itemsPerPage={10} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

