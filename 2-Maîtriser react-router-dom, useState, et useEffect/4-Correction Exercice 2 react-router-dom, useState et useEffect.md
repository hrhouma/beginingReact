# Correction v1
# Lien : https://github.com/hrhouma/DemoHooks2.git 
### Préparation

Assurez-vous d'avoir installé `react-router-dom` dans votre projet :

```bash
npx create-react-app demohooks2
cd demohooks2
npm install react-router-dom
```

### App.js - Configuration du Router

Dans votre `App.js`, configurez le router et définissez les routes pour les composants de l'application.

```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import AddQuote from './AddQuote';
import ShowQuotes1 from './ShowQuotes1';
import ShowQuotes2 from './ShowQuotes2';
import ShowQuotes3 from './ShowQuotes3';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-quote">Add Quote</Link>
            </li>
            <li>
              <Link to="/show-quotes-1">Show Quotes 1</Link>
            </li>
            <li>
              <Link to="/show-quotes-2">Show Quotes 2</Link>
            </li>
            <li>
              <Link to="/show-quotes-3">Show Quotes 3</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add-quote">
            <AddQuote />
          </Route>
          <Route path="/show-quotes-1">
            <ShowQuotes1 />
          </Route>
          <Route path="/show-quotes-2">
            <ShowQuotes2 />
          </Route>
          <Route path="/show-quotes-3">
            <ShowQuotes3 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

# Autre version de App.js

```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import AddQuote from './AddQuote';
import ShowQuotes1 from './ShowQuotes1';
import ShowQuotes2 from './ShowQuotes2';
import ShowQuotes3 from './ShowQuotes3';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-quote">Add Quote</Link></li>
            <li><Link to="/show-quotes-1">Show Quotes 1</Link></li>
            <li><Link to="/show-quotes-2">Show Quotes 2</Link></li>
            <li><Link to="/show-quotes-3">Show Quotes 3</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/add-quote" component={AddQuote} />
          <Route path="/show-quotes-1" component={ShowQuotes1} />
          <Route path="/show-quotes-2" component={ShowQuotes2} />
          <Route path="/show-quotes-3" component={ShowQuotes3} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

### Home.js - La page d'accueil

```jsx
import React from 'react';

function Home() {
  return <h2>Home Page: Welcome to the Quotes App!</h2>;
}

export default Home;
```

### AddQuote.js - Ajouter une citation

```jsx
import React, { useState } from 'react';

function AddQuote() {
  const [quote, setQuote] = useState('');

  return (
    <div>
      <h2>Add a Favorite Quote</h2>
      <input type="text" value={quote} onChange={(e) => setQuote(e.target.value)} />
      <p>Your favorite quote: {quote}</p>
    </div>
  );
}

export default AddQuote;
```

### ShowQuotes1.js - Afficher une citation aléatoire

```jsx
import React, { useState, useEffect } from 'react';

function ShowQuotes1() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(`${data.content} — ${data.author}`);
      });
  }, []);

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{quote}</p>
    </div>
  );
}

export default ShowQuotes1;
```

### ShowQuotes2.js - Afficher une nouvelle citation avec un bouton

Ce composant reprend le concept de `ShowQuotes1` mais ajoute un bouton permettant à l'utilisateur de charger une nouvelle citation sans recharger la page. 
L'utilisation d'une dépendance dans `useEffect` permet de recharger une citation chaque fois que l'utilisateur clique sur le bouton.

```jsx
import React, { useState, useEffect } from 'react';

function ShowQuotes2() {
  const [quote, setQuote] = useState('');
  const [trigger, setTrigger] = useState(0); // Ajouté pour déclencher useEffect

  // La fonction pour charger une nouvelle citation
  const loadNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(`${data.content} — ${data.author}`);
      });
  };

  // useEffect pour charger une citation au montage et à chaque modification de `trigger`
  useEffect(() => {
    loadNewQuote();
  }, [trigger]);

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{quote}</p>
      <button onClick={() => setTrigger(prev => prev + 1)}>Load New Quote</button>
    </div>
  );
}

export default ShowQuotes2;
```

Dans ce composant, `useState` est utilisé pour stocker la citation actuelle (`quote`) ainsi qu'un déclencheur (`trigger`). Lorsque l'utilisateur clique sur le bouton "Load New Quote", `setTrigger` est appelé pour incrémenter la valeur de `trigger`, ce qui déclenche `useEffect` pour recharger une nouvelle citation en exécutant la fonction `loadNewQuote`.

La clé ici est l'utilisation d'une valeur de déclenchement pour forcer `useEffect` à s'exécuter à nouveau et recharger une citation. Cette méthode est utile lorsque vous devez déclencher un effet en réponse à des actions de l'utilisateur, au-delà du montage et démontage du composant.


### ShowQuotes3.js - Afficher une liste de citations

```jsx
import React, { useState, useEffect } from 'react';

function ShowQuotes3() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://api.quotable.io/quotes?limit=10')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.results.map(q => `${q.content} — ${q.author}`));
      });
  }, []);

  return (
    <div>
      <h2>Quotes List</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowQuotes3;
```
