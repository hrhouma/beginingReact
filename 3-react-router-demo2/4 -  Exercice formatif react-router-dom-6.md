# Exercice formatif
### Prérequis

- Node.js et npm installés sur votre machine.
- Connaissance de base de React.
- Un éditeur de texte de votre choix (VSCode, Sublime Text, etc.).

### Étape 1 : Création de l'application React

1. Ouvrez un terminal.
2. Exécutez la commande suivante pour créer votre application React :
    ```bash
    npx create-react-app react-router-search-app
    ```
3. Naviguez dans le dossier de votre projet :
    ```bash
    cd react-router-search-app
    ```

### Étape 2 : Installation de React Router

1. Installez React Router DOM en exécutant la commande suivante dans le terminal :
    ```bash
    npm install react-router-dom
    ```
2. Attendez que l'installation soit terminée.

### Étape 3 : Préparation des composants

Supprimez le contenu du dossier `src` et créez les fichiers suivants :

- `App.js`
- `HomePage.js`
- `SearchResultsPage.js`

### Étape 4 : Configuration du Router dans App.js

1. Dans `App.js`, importez `BrowserRouter`, `Routes`, et `Route` depuis `react-router-dom`, ainsi que les composants `HomePage` et `SearchResultsPage`.
    ```jsx
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import HomePage from './HomePage';
    import SearchResultsPage from './SearchResultsPage';
    ```
2. Configurez vos routes :
    ```jsx
    function App() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search-results/:searchTerm" element={<SearchResultsPage />} />
                </Routes>
            </Router>
        );
    }

    export default App;
    ```

### Étape 5 : Création du composant HomePage

1. Dans `HomePage.js`, importez `useState` et `useNavigate` depuis `react-router-dom`.
2. Créez un formulaire avec un champ de texte pour le terme de recherche et un bouton pour soumettre le formulaire.
3. Utilisez `useState` pour stocker la valeur du champ de texte et `useNavigate` pour rediriger vers la page de résultats avec le terme de recherche.

    ```jsx
    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    function HomePage() {
        const [searchTerm, setSearchTerm] = useState('');
        const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault();
            navigate(`/search-results/${searchTerm}`);
        };

        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Entrez votre recherche..."
                />
                <button type="submit">Rechercher</button>
            </form>
        );
    }

    export default HomePage;
    ```

### Étape 6 : Création du composant SearchResultsPage

1. Dans `SearchResultsPage.js`, importez `useParams` depuis `react-router-dom`.
2. Utilisez `useParams` pour récupérer le terme de recherche de l'URL.
3. Affichez le terme de recherche dans le composant.

    ```jsx
    import React from 'react';
    import { useParams } from 'react-router-dom';

    function SearchResultsPage() {
        const { searchTerm } = useParams();

        return (
            <div>
                <h2>Résultats de recherche pour : {searchTerm}</h2>
            </div>
        );
    }

    export default SearchResultsPage;
    ```

### Étape 7 : Démarrage de l'application

1. Retournez à votre terminal.
2. Lancez votre application en exécutant :
    ```bash
    npm start
    ```
3. Votre navigateur devrait s'ouvrir automatiquement à l'adresse `http://localhost:3000`.

### Testez votre Application

- Saisissez un terme de recherche dans le champ sur la page d'accueil et soumettez le formulaire.
- Vous devriez être redirigé vers la page de résultats, où le terme de recherche est affiché.

