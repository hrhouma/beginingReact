# 1 - Pratique  1

 - Pour transformer l'exemple en une application React plus réaliste avec une structure de projet bien organisée, nous allons mettre en place des composants distincts pour le filtrage, la pagination, et la liste des produits. 
- Voici comment vous pouvez organiser et développer chaque partie de l'application :

### 1. Structure du Projet

Voici une suggestion de structure pour votre projet :

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

**FilterInput.js** :
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

**ProductList.js** :
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

**PaginatedProducts.js** :
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

**App.js** :
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
  const [filter, setFilter] = useState('');
  const filteredProducts = products.filter(product => product.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <FilterInput filter={filter} setFilter={setFilter} />
      <PaginatedProducts products={filteredProducts} itemsPerPage={5} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### 3. Démarrage de l'Application

Assurez-vous d'avoir tout installé correctement et lancez votre application :

```bash
npm start
```
