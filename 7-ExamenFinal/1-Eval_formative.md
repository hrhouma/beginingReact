# A - Énoncé 

## 1 - Configuration du Backend Express

1. **Cloner le Répertoire du Projet :**
   Commencez par cloner le répertoire :
   ```bash
   git clone https://github.com/hrhouma/api-quotes-v1.git
   cd api-quotes-v1/
   ```

2. **Installer les Dépendances :**
   Naviguez dans le dossier du backend Express et installez les dépendances nécessaires :
   ```bash 
   npm install
   ```

3. **Lancer le Serveur Express :**
   Démarrez le serveur Express pour qu'il écoute sur le port `5000` :
   ```bash
   node app.js
   ```
   Assurez-vous que le terminal reste ouvert pour garder le serveur actif.

## 2 - Développement de l'Application React

1. **Initialiser l'Application React :**
   Dans un nouveau terminal, créez une nouvelle application React (si ce n'est pas déjà fait) :
   ```bash
   npx create-react-app mon-app-react
   cd mon-app-react
   ```

2. **Installer Semantic UI React :**
   Pour utiliser Semantic UI dans votre application React, installez les packages nécessaires :
   ```bash
   npm install semantic-ui-react semantic-ui-css
   ```

3. **Configurer le CSS de Semantic UI :**
   Ajoutez le CSS de Semantic UI dans le fichier principal de votre application React `App.js` :
   ```javascript
   import 'semantic-ui-css/semantic.min.css';
   ```

4. **Développer l'Application :**
   Commencez à développer votre application en suivant les directives de l'exercice :
   - Créez des composants pour interagir avec le backend.
   - Utilisez `fetch` pour communiquer avec les routes `/quotes`, `/quotes/random`, et `/quotes/:id`.
   - Gérez l'état de l'application avec les hooks `useState` et `useEffect`.

5. **Exécuter l'Application React :**
   Lancez le serveur de développement de React pour voir votre application en action :
   ```bash
   npm start
   ```
   Cela ouvrira automatiquement votre navigateur par défaut à l'adresse `http://localhost:3000`.

## Test et Validation

1. **Test des Fonctionnalités :**
   Vérifiez que toutes les fonctionnalités de l'application fonctionnent comme attendu :
   - Le chargement de toutes les citations.
   - L'affichage d'une citation aléatoire.
   - La recherche de citations par ID.

2. **Correction des Problèmes :**
   Identifiez et corrigez les problèmes éventuels en consultant la console du navigateur et les logs du serveur.

3. **Documentation :**
   Rédigez une brève documentation sur comment utiliser votre application, incluant des captures d'écran ou des vidéos si nécessaire.


# B - Correction - version 1 sans semantic-ui

## App.js
 ```javascript
import React, { useState, useEffect } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [quoteId, setQuoteId] = useState('');

  // Charger une citation aléatoire au démarrage de l'application
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // Fonction pour charger toutes les citations
  const fetchAllQuotes = () => {
    fetch('http://localhost:5000/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.error('Error fetching all quotes:', error));
  };

  // Fonction pour effacer toutes les citations affichées
  const clearAllQuotes = () => {
    setQuotes([]);
  };

  // Fonction pour charger une nouvelle citation aléatoire
  const fetchRandomQuote = () => {
    fetch('http://localhost:5000/quotes/random')
      .then(response => response.json())
      .then(data => setRandomQuote(data))
      .catch(error => console.error('Error fetching random quote:', error));
  };

  // Fonction pour obtenir une citation par ID
  const fetchQuoteById = () => {
    fetch(`http://localhost:5000/quotes/${quoteId}`)
      .then(response => response.json())
      .then(data => setSelectedQuote(data))
      .catch(error => console.error('Error fetching quote by id:', error));
  };

  return (
    <div className="App">
      <h1>Citations</h1>
      <div>
        <h2>Toutes les Citations</h2>
        <button onClick={fetchAllQuotes}>Charger Toutes les Citations</button>
        <button onClick={clearAllQuotes}>Effacer Toutes les Citations</button>
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>{quote.quote} - {quote.author}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Citation Aléatoire</h2>
        <button onClick={fetchRandomQuote}>Charger une Nouvelle Citation Aléatoire</button>
        <p>{randomQuote ? `${randomQuote.quote} - ${randomQuote.author}` : "Chargement..."}</p>
      </div>

      <div>
        <h2>Chercher Citation par ID</h2>
        <input
          type="text"
          value={quoteId}
          onChange={(e) => setQuoteId(e.target.value)}
          placeholder="Entrez un ID"
        />
        <button onClick={fetchQuoteById}>Chercher</button>
        {selectedQuote && <p>{selectedQuote.quote} - {selectedQuote.author}</p>}
      </div>
    </div>
  );
}

export default App;
 ```

# B - Correction - version 2 avec semantic-ui



 ```javascript
import React, { useState, useEffect } from 'react';
import { Button, Container, Header, List, Input, Segment, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [quoteId, setQuoteId] = useState('');

  // Charger une citation aléatoire au démarrage de l'application
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // Fonction pour charger toutes les citations
  const fetchAllQuotes = () => {
    fetch('http://localhost:5000/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.error('Error fetching all quotes:', error));
  };

  // Fonction pour effacer toutes les citations affichées
  const clearAllQuotes = () => {
    setQuotes([]);
  };

  // Fonction pour charger une nouvelle citation aléatoire
  const fetchRandomQuote = () => {
    fetch('http://localhost:5000/quotes/random')
      .then(response => response.json())
      .then(data => setRandomQuote(data))
      .catch(error => console.error('Error fetching random quote:', error));
  };

  // Fonction pour obtenir une citation par ID
  const fetchQuoteById = () => {
    fetch(`http://localhost:5000/quotes/${quoteId}`)
      .then(response => response.json())
      .then(data => setSelectedQuote(data))
      .catch(error => console.error('Error fetching quote by id:', error));
  };

  return (
    <Container>
      <Header as='h1' textAlign='center' style={{ margin: '20px 0' }}>Citations</Header>
      <Segment>
        <Header as='h2'>Toutes les Citations</Header>
        <Button onClick={fetchAllQuotes} primary>Charger Toutes les Citations</Button>
        <Button onClick={clearAllQuotes} color='red'>Effacer Toutes les Citations</Button>
        <List>
          {quotes.map((quote, index) => (
            <List.Item key={index}>
              <List.Content>
                <List.Header>{quote.quote}</List.Header>
                <List.Description>{quote.author}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>

      <Segment>
        <Header as='h2'>Citation Aléatoire</Header>
        <Button onClick={fetchRandomQuote} secondary>Charger une Nouvelle Citation Aléatoire</Button>
        <Segment>
          {randomQuote ? `${randomQuote.quote} - ${randomQuote.author}` : "Chargement..."}
        </Segment>
      </Segment>

      <Segment>
        <Header as='h2'>Chercher Citation par ID</Header>
        <Input
          type="text"
          value={quoteId}
          onChange={(e) => setQuoteId(e.target.value)}
          placeholder="Entrez un ID"
          style={{ marginRight: '10px' }}
        />
        <Button onClick={fetchQuoteById} color='green'>Chercher</Button>
        <Segment>
          {selectedQuote ? `${selectedQuote.quote} - ${selectedQuote.author}` : ''}
        </Segment>
      </Segment>
    </Container>
  );
}

export default App;
 ```

# C - Tous lde code
