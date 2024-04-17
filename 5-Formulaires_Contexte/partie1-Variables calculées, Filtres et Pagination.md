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


# Explications supplémentaires de PaginatedProducts.js :



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
- Cette ligne extrait les produits à afficher sur la page actuelle en utilisant la méthode `slice()` sur le tableau `products`. Elle calcule les indices de début et de fin en fonction de la page actuelle et du nombre d'articles par page.
- Cette fonction utilise la méthode `slice()` sur le tableau `products` pour extraire une portion de ce tableau, correspondant à la page actuelle de résultats.

Voici comment elle fonctionne :

1. `(currentPage - 1) * itemsPerPage`: Cette partie calcule l'index de départ à partir duquel extraire les éléments. `currentPage` représente le numéro de la page actuelle, et `itemsPerPage` représente le nombre d'éléments à afficher par page. En soustrayant 1 de `currentPage` et en multipliant par `itemsPerPage`, on obtient l'index de départ de la page actuelle.

2. `currentPage * itemsPerPage`: Cette partie calcule l'index de fin jusqu'auquel extraire les éléments. En multipliant `currentPage` par `itemsPerPage`, on obtient l'index de fin de la page actuelle.

3. `products.slice()`: C'est la méthode `slice()` qui est appliquée sur le tableau `products`. Elle prend deux arguments : l'index de début et l'index de fin. Ces arguments déterminent la portion du tableau à extraire.

En combinant ces trois étapes, `currentProducts` contient une sous-section du tableau `products`, correspondant à la page actuelle de résultats, en fonction du numéro de page (`currentPage`) et du nombre d'éléments par page (`itemsPerPage`).

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


# Évaluation formative :

- Ajoutez plusieurs produits et observer le comportement de la navigation. Ajoutez plsueiurs produits par catégorie . Y-a-il d'autres boutons ajoutés ? et combien d'items sont-ils affichés par page ?

# Correction

- Modifiez la liste products

```bash
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Coffee Maker', category: 'Home Appliance', price: 250 },
  { id: 3, name: 'Book', category: 'Books', price: 20 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 20 },
  { id: 5, name: 'Blender', category: 'Home Appliance', price: 30 },
  { id: 6, name: 'Novel', category: 'Books', price: 50 },
  { id: 7, name: 'Smartwatch', category: 'Electronics', price: 25 },
  { id: 8, name: 'Wireless Mouse', category: 'Electronics', price: 15 },
  { id: 9, name: 'Microwave Oven', category: 'Home Appliance', price: 150 },
  { id: 10, name: 'Air Fryer', category: 'Home Appliance', price: 100 },
  { id: 11, name: 'Self-Help Book', category: 'Books', price: 30 },
  { id: 12, name: 'Mystery Novel', category: 'Books', price: 40 },
  { id: 13, name: 'Product 13', category: 'Electronics', price: 55 },
  { id: 14, name: 'Product 14', category: 'Home Appliance', price: 60 },
  { id: 15, name: 'Product 15', category: 'Books', price: 70 },
  { id: 16, name: 'Product 16', category: 'Electronics', price: 80 },
  { id: 17, name: 'Product 17', category: 'Home Appliance', price: 90 },
  { id: 18, name: 'Product 18', category: 'Books', price: 100 },
  { id: 19, name: 'Product 19', category: 'Electronics', price: 110 },
  { id: 20, name: 'Product 20', category: 'Home Appliance', price: 120 },
  { id: 21, name: 'Product 21', category: 'Books', price: 130 },
  { id: 22, name: 'Product 22', category: 'Electronics', price: 140 },
  { id: 23, name: 'Product 23', category: 'Home Appliance', price: 150 },
  { id: 24, name: 'Product 24', category: 'Books', price: 160 },
  { id: 25, name: 'Product 25', category: 'Electronics', price: 170 },
  { id: 26, name: 'Product 26', category: 'Home Appliance', price: 180 },
  { id: 27, name: 'Product 27', category: 'Books', price: 190 },
  { id: 28, name: 'Product 28', category: 'Electronics', price: 200 },
  { id: 29, name: 'Product 29', category: 'Home Appliance', price: 210 },
  { id: 30, name: 'Product 30', category: 'Books', price: 220 },
  { id: 31, name: 'Product 31', category: 'Electronics', price: 230 },
  { id: 32, name: 'Product 32', category: 'Home Appliance', price: 240 },
  { id: 33, name: 'Product 33', category: 'Books', price: 250 },
  { id: 34, name: 'Product 34', category: 'Electronics', price: 260 },
  { id: 35, name: 'Product 35', category: 'Home Appliance', price: 270 },
  { id: 36, name: 'Product 36', category: 'Books', price: 280 },
  { id: 37, name: 'Product 37', category: 'Electronics', price: 290 },
  { id: 38, name: 'Product 38', category: 'Home Appliance', price: 300 },
  { id: 39, name: 'Product 39', category: 'Books', price: 310 },
  { id: 40, name: 'Product 40', category: 'Electronics', price: 320 },
  { id: 41, name: 'Product 41', category: 'Home Appliance', price: 330 },
  { id: 42, name: 'Product 42', category: 'Books', price: 340 },
  { id: 43, name: 'Product 43', category: 'Electronics', price: 350 },
  { id: 44, name: 'Product 44', category: 'Home Appliance', price: 360 },
  { id: 45, name: 'Product 45', category: 'Books', price: 370 },
  { id: 46, name: 'Product 46', category: 'Electronics', price: 380 },
  { id: 47, name: 'Product 47', category: 'Home Appliance', price: 390 },
  { id: 48, name: 'Product 48', category: 'Books', price: 400 },
  { id: 49, name: 'Product 49', category: 'Electronics', price: 410 },
  { id: 50, name: 'Product 50', category: 'Home Appliance', price: 420 },
  { id: 51, name: 'Product 51', category: 'Books', price: 430 },
  { id: 52, name: 'Product 52', category: 'Electronics', price: 440 },
  { id: 53, name: 'Product 53', category: 'Home Appliance', price: 450 },
  { id: 54, name: 'Product 54', category: 'Books', price: 460 },
  { id: 55, name: 'Product 55', category: 'Electronics', price: 470 },
  { id: 56, name: 'Product 56', category: 'Home Appliance', price: 480 },
  { id: 57, name: 'Product 57', category: 'Books', price: 490 },
  { id: 58, name: 'Product 58', category: 'Electronics', price: 500 },
  { id: 59, name: 'Product 59', category: 'Home Appliance', price: 510 },
  { id: 60, name: 'Product 60', category: 'Books', price: 520 },
  { id: 61, name: 'Product 61', category: 'Electronics', price: 530 },
  { id: 62, name: 'Product 62', category: 'Home Appliance', price: 540 },
  { id: 63, name: 'Product 63', category: 'Books', price: 550 },
  { id: 64, name: 'Product 64', category: 'Electronics', price: 560 },
  { id: 65, name: 'Product 65', category: 'Home Appliance', price: 570 },
  { id: 66, name: 'Product 66', category: 'Books', price: 580 },
  { id: 67, name: 'Product 67', category: 'Electronics', price: 590 },
  { id: 68, name: 'Product 68', category: 'Home Appliance', price: 600 },
  { id: 69, name: 'Product 69', category: 'Books', price: 610 },
  { id: 70, name: 'Product 70', category: 'Electronics', price: 620 },
  { id: 71, name: 'Product 71', category: 'Home Appliance', price: 630 },
  { id: 72, name: 'Product 72', category: 'Books', price: 640 },
  { id: 73, name: 'Product 73', category: 'Electronics', price: 650 },
  { id: 74, name: 'Product 74', category: 'Home Appliance', price: 660 },
  { id: 75, name: 'Product 75', category: 'Books', price: 670 },
  { id: 76, name: 'Product 76', category: 'Electronics', price: 680 },
  { id: 77, name: 'Product 77', category: 'Home Appliance', price: 690 },
  { id: 78, name: 'Product 78', category: 'Books', price: 700 },
  { id: 79, name: 'Product 79', category: 'Electronics', price: 710 },
  { id: 80, name: 'Product 80', category: 'Home Appliance', price: 720 },
  { id: 81, name: 'Product 81', category: 'Books', price: 730 },
  { id: 82, name: 'Product 82', category: 'Electronics', price: 740 },
  { id: 83, name: 'Product 83', category: 'Home Appliance', price: 750 },
  { id: 84, name: 'Product 84', category: 'Books', price: 760 },
  { id: 85, name: 'Product 85', category: 'Electronics', price: 770 },
  { id: 86, name: 'Product 86', category: 'Home Appliance', price: 780 },
  { id: 87, name: 'Product 87', category: 'Books', price: 790 },
  { id: 88, name: 'Product 88', category: 'Electronics', price: 800 },
  { id: 89, name: 'Product 89', category: 'Home Appliance', price: 810 },
  { id: 90, name: 'Product 90', category: 'Books', price: 820 },
  { id: 91, name: 'Product 91', category: 'Electronics', price: 830 },
  { id: 92, name: 'Product 92', category: 'Home Appliance', price: 840 },
  { id: 93, name: 'Product 93', category: 'Books', price: 850 },
  { id: 94, name: 'Product 94', category: 'Electronics', price: 860 },
  { id: 95, name: 'Product 95', category: 'Home Appliance', price: 870 },
  { id: 96, name: 'Product 96', category: 'Books', price: 880 },
  { id: 97, name: 'Product 97', category: 'Electronics', price: 890 },
  { id: 98, name: 'Product 98', category: 'Home Appliance', price: 900 },
  { id: 99, name: 'Product 99', category: 'Books', price: 910 },
  { id: 100, name: 'Product 100', category: 'Electronics', price: 920 }
];

```

