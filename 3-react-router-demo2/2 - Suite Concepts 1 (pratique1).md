# pratique 1 React-router 

### Étape 1: Configuration initiale

- Supposons que vous avez déjà un projet React configuré.
- Si ce n'est pas le cas, vous pouvez créer un nouveau projet React en utilisant `create-react-app`.

1. **Installation de React Router**: Commencez par ajouter React Router à votre projet.

```bash
npm install react-router-dom@6
```

### Étape 2: Configuration du routage

2. **Configuration de base**: Dans votre fichier `App.js`, configurez les routes de base.

```jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```

### Étape 3: Gestion des pages

3. **Création des pages**: Créez des fichiers pour les pages `Home`, `About`, et `Profile`.

- `Home.js`:

```jsx
function Home() {
  return <h2>Home Page</h2>;
}

export default Home;
```

- `About.js`:

```jsx
function About() {
  return <h2>About Page</h2>;
}

export default About;
```

- `Profile.js`: Utilise `useParams` pour récupérer le paramètre de l'URL.

```jsx
import { useParams } from 'react-router-dom';

function Profile() {
  let { username } = useParams();
  return <h2>Profile Page: {username}</h2>;
}

export default Profile;
```

### Étape 4: Navigation et passage de paramètres

4. **Utilisation de `useNavigate` pour la navigation**: Vous pouvez ajouter un bouton sur votre page `About` qui navigue vers la page `Profile` avec un nom d'utilisateur.

```jsx
import { useNavigate } from 'react-router-dom';

function About() {
  let navigate = useNavigate();

  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => navigate('/profile/JohnDoe')}>Go to John Doe's Profile</button>
    </div>
  );
}
```

### Étape 5: Application conditionnelle de classes CSS

5. **Application conditionnelle de classes CSS**: Sur votre page `Profile`, vous pouvez appliquer une classe CSS de manière conditionnelle.

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

- Ce projet intègre la configuration de base de React Router, la navigation, le passage de paramètres, et l'application conditionnelle de classes CSS.
- Vous pouvez étendre ce projet de base en ajoutant plus de fonctionnalités et en expérimentant avec différentes configurations de React Router.
