# Partie 1: Prise en Main des Props

#### Objectif:
Comprendre et utiliser les props dans les composants React.

#### Instructions:
1. Créer une nouvelle application React en utilisant `create-react-app`.
2. Ajoutez un composant `Recherche.js`. Ce composant peut être de type classe ou fonction, selon votre préférence.
3. Intégrez le composant `Recherche` dans `App.js` sans lui passer des props.
4. Ajoutez une prop de type string nommée `query` au composant `Recherche`.
5. Ajoutez une prop de type fonction nommée `onSearch` au composant `Recherche`. Cette fonction affichera un message dans la console.
6. Modifiez `Recherche` pour qu'il affiche la prop de type string `query` sur la page.
7. Modifiez `Recherche` pour exécuter et afficher le résultat de la fonction `onSearch` lorsqu'une action spécifique se produit (par exemple, un clic sur un bouton).

# Partie 2: Interaction avec les Props

#### Objectif:
Approfondir la compréhension des props en ajoutant des interactions utilisateur.

#### Instructions:
1. Créer une nouvelle application React avec `create-react-app`.
2. Ajoutez un composant `Car.js`, qui peut être soit un composant de classe soit un composant fonctionnel.
3. Dans `App.js`, intégrez le composant `Car` avec les props suivantes :
   ```jsx
   <Car couleur="rouge" marque="Toyota Matrix" kilometrage="100 km"/>
   ```
4. Ajoutez une prop de type fonction à `Car` qui affichera "Je démarre" dans la console.
5. Ajoutez quatre boutons dans `Car` :
   - Le premier affiche la couleur de la voiture dans la console.
   - Le deuxième affiche la marque de la voiture.
   - Le troisième affiche le kilométrage.
   - Le quatrième exécute la fonction passée en prop pour afficher "Je démarre".

# Partie 3: Props Dynamiques et Utilisation des États

#### Objectif:
Apprendre à utiliser les états pour rendre les props dynamiques.

# Instructions:
1. En prenant comme base l'Exercice 2, modifiez le composant `Car` pour permettre à l'utilisateur de saisir dynamiquement la `couleur`, la `marque`, et le `kilométrage` via des champs de texte (inputs).
2. Utilisez l'état (`useState` pour les composants fonctionnels ou `state` et `setState()` pour les composants de type classe) pour stocker les valeurs saisies par l'utilisateur.
3. Les valeurs des props du composant `Car` dans `App.js` doivent maintenant refléter les valeurs stockées dans l'état, permettant ainsi à l'utilisateur de modifier dynamiquement les informations de la voiture.

# Détails de l'Exercice 1

#### Créer le projet et le composant Recherche

1. **Initialiser le projet React**:
   Utilisez `npx create-react-app mon-application` pour créer une nouvelle application React. Remplacez `mon-application` par le nom de votre choix.

2. **Création du composant `Recherche.js`**:
   - Créez un fichier nommé `Recherche.js` dans le dossier `src`.
   - Dans ce fichier, vous pouvez choisir entre créer un composant fonctionnel ou un composant classe. Voici un exemple de chaque :

   **Composant fonctionnel `Recherche.js`**:
   ```jsx
   function Recherche() {
       return <div>Component Recherche</div>;
   }

   export default Recherche;
   ```

   **(OU) Composant de classe `Recherche.js`**:
   ```jsx
   import React, { Component } from 'react';

   class Recherche extends Component {
       render() {
           return <div>Component Recherche</div>;
       }
   }

   export default Recherche;
   ```

3. **Utilisation de `Recherche` dans `App.js`**:
   - Dans `App.js`, importez le composant `Recherche` et utilisez-le comme suit :
   ```jsx
   import React from 'react';
   import './App.css';
   import Recherche from './Recherche'; // Assurez-vous que le chemin d'accès est correct

   function App() {
     return (
       <div className="App">
         <Recherche />
       </div>
     );
   }

   export default App;
   ```

#### Ajouter des Props au Composant `Recherche`

4. **Ajouter une prop de type string**:
   - Modifiez l'appel à `Recherche` dans `App.js` pour passer une prop `query` :
   ```jsx
   <Recherche query="Recherche initiale" />
   ```
   
5. **Ajouter une prop de type fonction**:
   - Définissez une fonction dans `App.js` que vous passerez à `Recherche` comme prop. Cette fonction pourrait simplement loguer quelque chose dans la console :
   ```jsx
   function onSearch() {
     console.log("La fonction de recherche a été appelée.");
   }
   ```
   - Passez cette fonction en tant que prop à `Recherche` :
   ```jsx
   <Recherche query="Recherche initiale" onSearch={onSearch} />
   ```

#### Modifier `Recherche` pour Utiliser les Props

6. **Affichage de la prop `query`**:
   - Dans `Recherche`, modifiez le composant pour afficher la prop `query` :
   ```jsx
   function Recherche(props) {
     return <div>{props.query}</div>;
   }
   ```

7. **Utiliser la prop de type fonction**:
   - Ajoutez un bouton dans `Recherche` qui, lorsqu'il est cliqué, appelle la fonction `onSearch` passée en prop :
   ```jsx
   function Recherche(props) {
     return (
       <div>
         <div>{props.query}</div>
         <button onClick={props.onSearch}>Lancer la recherche</button>
       </div>
     );
   }
   ```
