# React Router, c'est quoi au juste?  
- React Router est une bibliothèque de routage côté client pour React.
- Elle permet de gérer la navigation entre les différentes vues d'une application React.
- Voici une introduction à ses concepts clés, accompagnée d'exemples pour mieux comprendre leur utilisation.

### 1. Introduction à React Router

- React Router permet de créer une application single-page (SPA) où les utilisateurs peuvent naviguer entre les différentes parties de l'application sans recharger la page.
- Il synchronise l'UI avec l'URL, permettant ainsi de partager des liens vers des parties spécifiques de l'application et de bénéficier d'une navigation naturelle comme dans une application multi-page traditionnelle.

### 2. Routage simple (sans contenu partagé)

Pour commencer, installons React Router dans un projet React :

```bash
npm install react-router-dom@6
```

Ensuite, on peut configurer un routage simple en utilisant `<BrowserRouter>` et `<Routes>` pour définir nos chemins d'accès :

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
```

### 3. `<RouterProvider />`

Dans la version 6 de React Router, `<RouterProvider>` peut être utilisé pour configurer le routeur à l'aide d'un objet de configuration. Cela peut rendre le routage plus dynamique et modulable :

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "about", element: <AboutPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

### 4. `<Link />`

`<Link>` est utilisé pour créer des liens navigables sans recharger la page :

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

### 5. `useNavigate()`

`useNavigate` est un hook qui permet de naviguer programmablement :

```jsx
import { useNavigate } from 'react-router-dom';

function HomePage() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate('/about')}>Go to About</button>
  );
}
```


# V1. Résumé du code de la première partie 1 version 1

```jsx
import './App.css';

import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter,Link,useNavigate } from 'react-router-dom';


function HomePage() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate('/about')}>Go to About</button>
  );
}
const AboutPage = () => { return <div> About PAGE</div> }

const monrouteur1 = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "about", element: <AboutPage /> },
]);

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

function App() {
  return <RouterProvider router={monrouteur1} />;
}

export default App;
```


# V2. Résumé du code de la première partie 1 version 2 + utilisation du composant Navigation()


```jsx
import { useNavigate,RouterProvider,createBrowserRouter, Link, Outlet } from 'react-router-dom';
// Composants des pages
const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>Page d'accueil</h1>
      <button onClick={() => navigate('/about')}>Aller à la page À propos</button>
    </>
  );
};

const AboutPage = () => {
  return <h1>Page À propos</h1>;
};

// Composant de navigation
function Navigation() {
  return (
    <nav>
      <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      <Outlet />
    </nav>
  );
}

// Configuration du routeur
const router = createBrowserRouter([
  {element: <Navigation/>, children: [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> }
   
  ]}
]);

// Composant App
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


```

# V3. Résumé du code de la première partie 1 version 3
![image](https://github.com/hrhouma/beginingReact/assets/10111526/1c9eec35-5379-4090-b95b-ba65d8944917)

## AboutPage.js
```jsx
const AboutPage = () => { return <div> About PAGE</div> }
export default AboutPage;
```
## HomePage.js
```jsx
import { useNavigate } from 'react-router-dom';

function HomePage() {
    let navigate = useNavigate();
    return (
      <button onClick={() => navigate('/about')}>Go to About</button>
    );
  }
  export default HomePage;
```
## Layout.js
```jsx
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>
    );
  }

function Layout({ children }) {
    return (
      <>
        <Navigation />
        <div>{children}</div>
      </>
    );
  }
  export default Layout;
```
## App.js
```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Layout from './components/Layout';

// Assurez-vous d'importer vos composants correctement

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePage /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><AboutPage /></Layout>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

```


### 6. Passage de paramètres (`useParams`)

`useParams` permet d'accéder aux paramètres d'URL dans un composant :

```jsx
import { useParams } from 'react-router-dom';

function UserPage() {
  let { userId } = useParams();
  return <div>User ID: {userId}</div>;
}
```

Route correspondante :

```jsx
<Route path="/user/:userId" element={<UserPage />} />
```

### 7. Rendu conditionnel

Vous pouvez utiliser le rendu conditionnel pour afficher des éléments différents selon l'état ou les props de votre application :

```jsx
function WelcomeMessage({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}
```

### 8. Appliquer une classe CSS de façon conditionnelle

Pour appliquer une classe CSS de manière conditionnelle, vous pouvez utiliser une expression ternaire ou des bibliothèques comme `classnames` :

```jsx
function Button({ isActive }) {
  return (
    <button className={isActive ? 'active' : ''}>Click Me</button>
  );
}
```

### 9. **Application conditionnelle de classes CSS**: Sur votre page `Profile`, vous pouvez appliquer une classe CSS de manière conditionnelle.

- Ajoutez un peu de CSS dans `Profile.css`:

```css
.profile-highlights {
  color: blue;
}

.profile-normal {
  color: grey;
}
```

- Utilisez ce CSS de manière conditionnelle dans `Profile.js`:

```jsx
import { useParams } from 'react-router-dom';
import './Profile.css';

function Profile() {
  let { username } = useParams();
  let highlight = username.length > 5; // Condition arbitraire pour l'exemple

  return (
    <h2 className={highlight ? 'profile-highlights' : 'profile-normal'}>
      Profile Page: {username}
    </h2>
  );
}
```


# V4. Résumé du code de la deuxième partie  version 4 de notre mini-application
## Concepts : le passage de paramètres avec `useParams`, le rendu conditionnel, et l'application conditionnelle de classes CSS.

![image](https://github.com/hrhouma/beginingReact/assets/10111526/939626b3-1f6e-45ff-af68-decf0dc217f8)

### `App.js`

```jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import UserPage from './components/UserPage'; // Importez UserPage
import Profile from './components/Profile'; // Importez Profile

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePage /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><AboutPage /></Layout>,
  },
  {
    path: "/user/:userId", // Ajoutez la route pour UserPage
    element: <Layout><UserPage /></Layout>,
  },
  {
    path: "/profile/:username", // Ajoutez la route pour Profile
    element: <Layout><Profile /></Layout>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

### `UserPage.js`

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
  let { userId } = useParams();
  return <div>User ID: {userId}</div>;
}

export default UserPage;
```

### `Profile.js`

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

function Profile() {
  let { username } = useParams();
  let highlight = username.length > 5;
  return <h2 className={highlight ? 'profile-highlights' : 'profile-normal'}>Profile Page: {username}</h2>;
}

export default Profile;
```

### `Profile.css`

```css
.profile-highlights {
  color: blue;
}

.profile-normal {
  color: grey;
}
```

## AboutPage.js
```jsx
const AboutPage = () => { return <div> About PAGE</div> }
export default AboutPage;
```
## HomePage.js
```jsx
import { useNavigate } from 'react-router-dom';

function HomePage() {
    let navigate = useNavigate();
    return (
      <button onClick={() => navigate('/about')}>Go to About</button>
    );
  }
  export default HomePage;
```
## Layout.js
```jsx
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      </nav>
    );
  }

function Layout({ children }) {
    return (
      <>
        <Navigation />
        <div>{children}</div>
      </>
    );
  }
  export default Layout;
```


## Optionnel
### `WelcomeMessage.js` (Exemple de rendu conditionnel)

```jsx
import React from 'react';

function WelcomeMessage({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}

export default WelcomeMessage;
```

### `Button.js` (Exemple d'application de classe CSS de manière conditionnelle)

```jsx
import React from 'react';

function Button({ isActive }) {
  return <button className={isActive ? 'active' : ''}>Click Me</button>;
}

export default Button;
```

### Notes complémentaires

- Assurez-vous que tous les fichiers de composants (`AboutPage.js`, `HomePage.js`, `Layout.js`, `UserPage.js`, `Profile.js`, `WelcomeMessage.js`, et `Button.js`) se trouvent dans le dossier `./components/`.
- Vous devrez créer manuellement le dossier `./components/` dans votre projet si ce n'est pas déjà fait, et y placer tous les fichiers de composants.
- Pour le style du bouton dans `Button.js`, vous pouvez ajouter des styles correspondants dans votre fichier CSS global ou dans un module CSS spécifique à ce composant.
- Cette structure de code complet montre comment construire une application React simple avec React Router tout en intégrant des concepts avancés comme le passage de paramètres, le rendu conditionnel, et l'application conditionnelle de styles CSS.
- Ce projet intègre la configuration de base de React Router, la navigation, le passage de paramètres, et l'application conditionnelle de classes CSS.
- Vous pouvez étendre ce projet de base en ajoutant plus de fonctionnalités et en expérimentant avec différentes configurations de React Router.
- Ces exemples couvrent les bases de React Router et montrent comment il facilite la création d'applications SPA avec React.
- React Router offre des fonctionnalités puissantes pour le routage, la navigation, et la gestion des paramètres d'URL, rendant votre application plus accessible et conviviale.


# V5. Résumé du code de la deuxième partie  version 5 de notre mini-application

Nous modifions `Layout.js` afin d'inclure des liens vers les pages `User` et `Profile`, avec la possibilité de saisir l'ID de l'utilisateur et le nom d'utilisateur (username) du profil via des champs de saisie, nous pouvons suivre une approche basée sur les états et le hook **useState**. Cette approche utilise l'état local pour stocker les valeurs saisies et la navigation programmée pour rediriger vers les URL correspondantes.

### `Layout.js` modifié

```jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');

  const handleUserNavigate = () => {
    navigate(`/user/${userId}`);
  };

  const handleProfileNavigate = () => {
    navigate(`/profile/${username}`);
  };

  return (
    <nav>
      <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
      <div>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleUserNavigate}>Go to User</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleProfileNavigate}>Go to Profile</button>
      </div>
    </nav>
  );
}

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
}

export default Layout;
```

### Explication

- **Navigation avec saisie utilisateur** : La navigation programmée est utilisée ici en combinaison avec les hooks `useState` et `useNavigate`. Cela permet aux utilisateurs de saisir un ID d'utilisateur ou un nom d'utilisateur et de naviguer vers les pages correspondantes en cliquant sur les boutons.

- **`useState` pour le stockage des entrées** : Deux états locaux, `userId` et `username`, sont utilisés pour stocker les valeurs entrées par l'utilisateur dans les champs de texte.

- **Gestionnaires d'événements pour la navigation** : Les fonctions `handleUserNavigate` et `handleProfileNavigate` sont déclenchées lorsque les boutons correspondants sont cliqués. Elles utilisent la valeur actuelle des états `userId` et `username` pour naviguer vers les URLs appropriées.

En intégrant cette fonctionnalité dans `Layout.js`, vous ajoutez une flexibilité significative à votre application, permettant aux utilisateurs de naviguer facilement vers des pages spécifiques basées sur des paramètres qu'ils fournissent.
