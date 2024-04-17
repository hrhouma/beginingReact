# 1 - Pratique  1 - Variables calculées, Filtres et Pagination

### 1. Structure du Projet

Voici la structure de votre projet :

```
react-filters-pagination/
├── src/
│   ├── components/
│   │   ├── FilterInput.js
│   │   ├── PaginatedProducts.js
│   │   ├── ProductList.js
│   │   └── index.js
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
└── package.json
```

### 2. Développement des Composants

# FilterInput.js :
Ce composant gérera l'input utilisateur pour filtrer les produits.

```jsx
import React from 'react';

const FilterInput = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Filter by category"
    />
  );
};

export default FilterInput;
```

# ProductList.js :
Ce composant affichera la liste des produits filtrés et paginés.

```jsx
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name} - ${product.price}</li>
      ))}
    </ul>
  );
};

export default ProductList;
```

# PaginatedProducts.js :
Ce composant s'occupera de la pagination des produits.

```jsx
import React, { useState } from 'react';
import ProductList from './ProductList';

const PaginatedProducts = ({ products, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <ProductList products={currentProducts} />
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

export default PaginatedProducts;
```

# App.js :
Le composant principal qui intègre tout.

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FilterInput from './components/FilterInput';
import PaginatedProducts from './components/PaginatedProducts';

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliance', price: 250 },
  { id: 3, name: 'Book', category: 'Books', price: 20 },
  // Plus de produits...
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter(product => product.category.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <FilterInput filter={searchTerm} setFilter={setSearchTerm} />
      <PaginatedProducts products={filteredProducts} itemsPerPage={5} />
    </div>
  );
};


export default App;


```

### 3. Démarrage de l'Application

Assurez-vous d'avoir tout installé correctement et lancez votre application :

```bash
npm start
```


# Explications supplémentaires 



1. **Affichage de Produits** : Le composant montre une liste de produits sur une page web. Cela aide les utilisateurs à voir seulement un nombre défini de produits à la fois, sans être submergés par trop d'informations.

2. **Pagination** : Il divise cette liste de produits en plusieurs "pages" afin que l'utilisateur puisse naviguer facilement d'une série de produits à une autre. Imaginons un livre : au lieu de tourner chaque page une par une, vous pouvez sauter directement à un chapitre ou une section spécifique.

3. **Boutons de Navigation** : Au bas de la liste de produits, il y a des boutons numérotés. Chaque bouton correspond à une page différente. En cliquant sur ces boutons, l'utilisateur peut aller directement à la page de produits qu'il souhaite voir.

4. **Interactivité** : Lorsqu'un utilisateur clique sur un bouton, la liste des produits se met à jour pour montrer ceux qui sont sur la page choisie. Cela permet aux utilisateurs de contrôler ce qu'ils voient et quand ils le voient.

En résumé, ce composant aide à organiser les produits en groupes plus petits et gérables et permet aux utilisateurs de choisir quels groupes ils veulent voir à l'aide des boutons. C'est comme avoir un index dans un livre qui vous permet de sauter directement à la partie qui vous intéresse.



Le code définit un composant `PaginatedProducts` qui prend deux props : `products` (une liste des produits à paginer) et `itemsPerPage` (le nombre d'articles à afficher par page). Voici une explication détaillée du code :

1. **Importation des dépendances** :
   ```javascript
   import React, { useState } from 'react';
   import ProductList from './ProductList';
   ```
   Ce code importe les dépendances nécessaires depuis React et `ProductList`. React est la bibliothèque principale utilisée pour créer des interfaces utilisateur, et `useState` est un hook qui permet de gérer l'état local dans les composants fonctionnels. `ProductList` semble être un composant utilisé pour afficher une liste de produits.

2. **Définition du composant `PaginatedProducts`** :
   ```javascript
   const PaginatedProducts = ({ products, itemsPerPage }) => {
   ```
   Cela définit un composant fonctionnel nommé `PaginatedProducts` qui prend deux props : `products` (une liste de produits) et `itemsPerPage` (le nombre d'articles à afficher par page).

3. **État local avec `useState`** :
   ```javascript
   const [currentPage, setCurrentPage] = useState(1);
   ```
   Ici, un état local `currentPage` est créé à l'aide du hook `useState`, avec une valeur initiale de `1`. Cet état est utilisé pour suivre la page actuellement affichée.

4. **Calcul du nombre total de pages** :
   ```javascript
   const totalPages = Math.ceil(products.length / itemsPerPage);
   ```
   Cette ligne calcule le nombre total de pages nécessaires pour afficher tous les produits en fonction du nombre d'articles par page (`itemsPerPage`). `Math.ceil()` est utilisé pour arrondir le résultat à l'entier supérieur.

5. **Extraction des produits de la page actuelle** :
   ```javascript
   const currentProducts = products.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage
   );
   ```
   Cette ligne extrait les produits à afficher sur la page actuelle en utilisant la méthode `slice()` sur le tableau `products`. Elle calcule les indices de début et de fin en fonction de la page actuelle et du nombre d'articles par page.

6. **Rendu du composant** :
   ```javascript
   return (
     <div>
       <ProductList products={currentProducts} />
       <div>
         {Array.from({ length: totalPages }, (_, index) => (
           <button key={index} onClick={() => setCurrentPage(index + 1)}>
             {index + 1}
           </button>
         ))}
       </div>
     </div>
   );
   ```
   Le composant rend une liste de produits à l'aide du composant `ProductList`, en passant les `currentProducts`. Ensuite, il génère une série de boutons numérotés pour permettre à l'utilisateur de naviguer entre les pages. Chaque bouton est associé à un numéro de page et un gestionnaire d'événements qui met à jour l'état `currentPage` lorsque le bouton est cliqué.

En résumé, ce composant `PaginatedProducts` permet d'afficher une liste de produits de manière paginée, avec un nombre configurable d'articles par page, et fournit des boutons de navigation pour passer d'une page à l'autre.

