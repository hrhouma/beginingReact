# Partie 4 - Guide des formulaires React

# 1 - Création du formulaire : 
- Les formulaires sont un aspect essentiel du développement web, et React offre des fonctionnalités puissantes pour les gérer de manière efficace. 
- Ce guide vous aidera à comprendre comment créer et gérer des formulaires dans vos applications React.

## Création d'un formulaire

Pour créer un formulaire dans React, utilisez la balise `<form>` et incluez les éléments de saisie à l'intérieur. Voici un exemple de base :

```jsx
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulaire soumis avec ces données :', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom d'utilisateur:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mot de passe:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default App;
```

- Dans cet exemple, nous utilisons le hook `useState` pour gérer l'état du formulaire.
- `handleChange` met à jour l'état chaque fois qu'un champ de saisie est modifié, et `handleSubmit` est appelé lorsque le formulaire est soumis.

## Explications supplémentaires du code

### Explication 2: La ligne `event.preventDefault();` ?

La ligne `event.preventDefault();` est utilisée dans la fonction de gestionnaire d'événements `handleSubmit` d'un formulaire React. Son but principal est d'empêcher le comportement par défaut d'un événement, en l'occurrence, l'envoi du formulaire via une requête HTTP.

Lorsque vous soumettez un formulaire dans une application web classique, le navigateur envoie généralement une requête HTTP POST ou GET au serveur pour traiter les données saisies par l'utilisateur. Cela provoque le rechargement de la page ou la redirection vers une autre page, en fonction de la réponse du serveur.

Dans React, vous pouvez gérer la soumission du formulaire de manière plus dynamique et réactive à l'aide de JavaScript. Cependant, si vous ne gérez pas explicitement la soumission du formulaire, le comportement par défaut du navigateur sera toujours exécuté.

En appelant `event.preventDefault();`, vous indiquez à React de ne pas effectuer l'action par défaut associée à l'événement de soumission du formulaire. Cela signifie que la page ne sera pas rechargée et qu'aucune requête HTTP ne sera envoyée au serveur. Au lieu de cela, vous pouvez manipuler les données du formulaire dans votre application React selon vos besoins, par exemple, en les envoyant à un serveur via une requête AJAX, en les validant localement, ou en effectuant d'autres traitements personnalisés.

En résumé, `event.preventDefault();` est utilisé pour empêcher le comportement par défaut de soumission d'un formulaire dans une application React, afin de permettre un contrôle total sur le traitement des données du formulaire par le code JavaScript de l'application.

### Explication 3: La fonction `handleChange` ?
```jsx
const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
```

- La fonction `handleChange` est souvent utilisée dans les formulaires React pour mettre à jour dynamiquement les valeurs des champs de formulaire à mesure que l'utilisateur saisit des données. 
- Voici une explication détaillée de chaque partie :

1. `const handleChange = (event) => { ... }`: C'est une fonction fléchée qui prend un argument `event`, représentant l'événement de changement déclenché lorsque l'utilisateur interagit avec un élément du formulaire, tel qu'un champ de saisie.

2. `const { name, value } = event.target;`: Cette ligne extrait deux propriétés importantes de l'élément du formulaire sur lequel l'événement a été déclenché. `name` représente le nom de l'élément du formulaire (généralement défini par l'attribut `name` dans le balisage HTML), et `value` représente la valeur saisie par l'utilisateur dans cet élément du formulaire.

3. `setFormData({ ...formData, [name]: value });`: Cette ligne met à jour l'état du formulaire en utilisant la fonction `setFormData`, qui est généralement fournie par le hook `useState` dans React pour gérer l'état local d'un composant. `formData` est l'état actuel du formulaire, et `setFormData` est une fonction qui permet de le mettre à jour.

   - `{ ...formData }`: Cette syntaxe utilise la propagation des propriétés (spread operator) pour créer une copie de l'objet `formData`. Cela garantit que nous ne modifions pas directement l'état actuel, ce qui est une bonne pratique en React pour éviter les mutations d'état directes.
   
   - `[name]: value`: Cette syntaxe crée une paire de clé-valeur dynamique dans l'objet mis à jour. La clé est le nom du champ de formulaire (`name`), et la valeur est la nouvelle valeur saisie par l'utilisateur (`value`).
   
   - En combinant ces deux parties avec la propagation des propriétés, nous obtenons un nouvel objet qui conserve les valeurs existantes de l'état du formulaire (`...formData`) tout en mettant à jour la valeur du champ spécifique (`[name]: value`) qui a été modifié par l'utilisateur.

En résumé, la fonction `handleChange` est utilisée pour mettre à jour dynamiquement l'état du formulaire dans un composant React en réponse aux événements de changement déclenchés par l'utilisateur. Elle permet une gestion efficace des données saisies par l'utilisateur dans les champs de formulaire, en utilisant les noms des champs pour identifier quelle valeur doit être mise à jour.

## Gestion des données du formulaire

- React permet de stocker les données du formulaire dans l'état local du composant à l'aide de hooks comme `useState`. 
- Cela rend la gestion des données du formulaire plus intuitive et facilite la mise à jour de l'interface utilisateur en fonction des saisies de l'utilisateur.

## Validation des formulaires

- La validation des formulaires est une étape importante pour s'assurer que les données saisies par l'utilisateur sont correctes. 
- Vous pouvez valider les données du formulaire en ajoutant des conditions dans `handleSubmit` ou en utilisant des bibliothèques de validation tierces telles que `formik` ou `yup`.
==> Sujet de la partie suivante !

Bien sûr, voici l'énoncé pour l'exercice :



# 2 - Exercice formatif : Refactoriser un formulaire avec Semantic UI React

**Objectif :** Le but de cet exercice est de refactoriser une application React existante pour utiliser Semantic UI React afin de styliser les composants d'interface utilisateur.

**Instructions :**

1. Utilisez le code d'application React fourni ci-haut. Il contient un formulaire simple avec des champs pour le nom d'utilisateur et le mot de passe.

2. Installez Semantic UI React et ses dépendances dans le projet.

3. Refactorisez l'application pour remplacer les balises HTML par les composants Semantic UI React correspondants. Utilisez les composants `Form`, `Form.Field` et `Button` pour encadrer les champs de saisie et le bouton de soumission.

4. Assurez-vous que les fonctionnalités existantes du formulaire (gestion de l'état, gestion des événements de changement et de soumission) restent inchangées après le refactoring.

5. Testez l'application pour vous assurer que les styles Semantic UI sont appliqués correctement et que le formulaire fonctionne comme prévu.

**Bonus :** 

- Ajoutez des messages d'erreur et de succès à l'interface utilisateur pour indiquer à l'utilisateur si la soumission du formulaire a réussi ou échoué.

- Explorez d'autres composants Semantic UI React et essayez de les intégrer à l'application pour améliorer davantage l'interface utilisateur.

**Livrables :** Une fois l'exercice terminé, soumettez le code refactorisé ainsi que toute documentation ou explication nécessaire pour expliquer les changements apportés à l'application.


# 3 -  Correction de l'exercice formatif


- Voici la correction étape par étape :

**Étape 1 : Installation de Semantic UI React**

Utilisez npm pour installer Semantic UI React et ses dépendances dans le projet :

```bash
npm install semantic-ui-react semantic-ui-css
```

**Étape 2 : Refactorisation de l'application avec Semantic UI React**

Dans le fichier `App.js`, remplacez le code existant par le code suivant pour utiliser les composants Semantic UI React :

```javascript
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulaire soumis avec ces données :', formData);
  };

  return (
    <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" primary>Soumettre</Button>
      </Form>
    </div>
  );
}

export default App;
```

**Étape 3 : Test de l'application**

Exécutez l'application et assurez-vous que les styles Semantic UI sont appliqués correctement et que le formulaire est aligné comme prévu.

Avec ces étapes, le formulaire devrait maintenant être bien aligné et stylisé avec Semantic UI React.

# 4 -  Correction de la partie bonus

- Voici comment vous pourriez implémenter la partie bonus :

### Ajout de messages d'erreur et de succès :

1. **Définir des états pour les messages :**
   Vous pouvez utiliser deux nouveaux états pour gérer les messages d'erreur et de succès. Par exemple :
   ```javascript
   const [error, setError] = useState('');
   const [success, setSuccess] = useState('');
   ```

2. **Afficher les messages dans le JSX :**
   Dans votre JSX, vous pouvez ajouter des éléments pour afficher les messages d'erreur et de succès. Par exemple :
   ```jsx
   {error && <div className="ui negative message">{error}</div>}
   {success && <div className="ui positive message">{success}</div>}
   ```

3. **Mise à jour des messages lors de la soumission du formulaire :**
   Dans votre fonction `handleSubmit`, vous pouvez mettre à jour les états des messages en fonction du résultat de la soumission du formulaire. Par exemple :
   ```javascript
   const handleSubmit = (event) => {
     event.preventDefault();
     // Votre logique de validation et de soumission du formulaire ici
     if (Object.keys(formData).length > 0) {
       setSuccess('Le formulaire a été soumis avec succès !');
       setError('');
     } else {
       setError('Une erreur est survenue lors de la soumission du formulaire.');
       setSuccess('');
     }
   };
   ```


# 5 - Code complet num1 de la partie bonus :
 ```jsx
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  /*
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulaire soumis avec ces données :', formData);
  };
*/

  const handleSubmit = (event) => {
    event.preventDefault();
    // Votre logique de validation et de soumission du formulaire ici
    if (Object.keys(formData).length > 0) {
      setSuccess('Le formulaire a été soumis avec succès !');
      setError('');
    } else {
      setError('Une erreur est survenue lors de la soumission du formulaire.');
      setSuccess('');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" primary>Soumettre</Button>
      </Form>
      {error && <div className="ui negative message">{error}</div>}
      {success && <div className="ui positive message">{success}</div>}
    </div>
  );
}

export default App;
 ```
# 6 - Problèmes avec le CODE ci-haut (code complet num1) de la partie bonus :
- Nous remarquons que ce code ne fonctionne pas bien avec un nom d'utilisateur et un mot de passe vides.
- C'est quoi le problème avec le code précédent ?
- Réponse : 
- Le problème dans le code actuel ci-haut est que la condition de validation dans la fonction `handleSubmit` n'est pas adaptée pour vérifier si les champs `username` et `password` sont vides. La condition `Object.keys(formData).length > 0` sera toujours vraie car `formData` contient toujours deux clés (`username` et `password`), indépendamment de leurs valeurs.

Pour corriger ce problème et s'assurer que le formulaire ne soit soumis avec succès que lorsque les deux champs sont remplis, vous pouvez modifier la condition pour vérifier que ni `username` ni `password` ne sont vides. Voici une version modifiée de votre fonction `handleSubmit` qui implémente cette logique:

```jsx
const handleSubmit = (event) => {
  event.preventDefault();

  // Vérification que les champs username et password ne sont pas vides
  if (formData.username.trim() && formData.password.trim()) {
    setSuccess('Le formulaire a été soumis avec succès !');
    setError('');
  } else {
    setError('Veuillez remplir tous les champs.');
    setSuccess('');
  }
};
```

Cette modification garantit que `setSuccess` est appelé seulement si `username` et `password` sont non vides, et `setError` est appelé dans le cas contraire, demandant à l'utilisateur de remplir tous les champs. Cela devrait résoudre les problèmes que vous avez observés.
# 7- Code complet (FINAL) num2 de la partie bonus :
- Voici notre code React modifié avec la correction apportée à la fonction `handleSubmit` pour assurer que le message de succès s'affiche seulement quand les champs `username` et `password` sont remplis :

```jsx
import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification que les champs username et password ne sont pas vides
    if (formData.username.trim() && formData.password.trim()) {
      setSuccess('Le formulaire a été soumis avec succès !');
      setError('');
    } else {
      setError('Veuillez remplir tous les champs.');
      setSuccess('');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" primary>Soumettre</Button>
      </Form>
      {error && <div className="ui negative message">{error}</div>}
      {success && <div className="ui positive message">{success}</div>}
    </div>
  );
}

export default App;
```

- Avec ce code, votre application React affichera un message d'erreur si l'un des champs est vide, et un message de succès seulement lorsque les deux champs sont correctement remplis.

# 8 -  (facultatif) Aller plus loin et exploration des autres composants Semantic UI React :

Semantic UI React propose une grande variété de composants pour créer des interfaces utilisateur riches et réactives. Vous pouvez explorer la documentation de Semantic UI React et expérimenter avec différents composants pour améliorer votre application. Voici quelques composants que vous pourriez intégrer :
- **Dropdown**: Pour les sélections déroulantes.
- **Modal**: Pour les fenêtres modales et les boîtes de dialogue.
- **Accordion**: Pour les sections extensibles et rétractables.
- **Menu**: Pour les menus de navigation.
- **Card**: Pour afficher des contenus sous forme de cartes.

N'hésitez pas à utiliser ces composants pour améliorer l'expérience utilisateur de votre application.



# 9 - Exercice pour renforcer la validation des entrées

**Objectif :** Améliorer la sécurité et l'intégrité des données en validant les entrées des utilisateurs dans un formulaire React.

**Instructions :**

1. **Utilisez le code d'application React fourni dans la section précédente.** Ce code contient un formulaire simple avec des champs pour le nom d'utilisateur et le mot de passe.
2. **Ajoutez les champs `email`, `phone`, et `date` au formulaire en utilisant les composants de Semantic UI React.** Assurez-vous de styliser ces champs de manière cohérente avec les autres éléments du formulaire.
3. **Implémentez des validations pour chaque nouveau champ ajouté ainsi que pour les champs existants :**
   - **Nom d'utilisateur :** Doit contenir entre 5 et 15 caractères alphanumériques.
   - **Mot de passe :** Doit inclure une combinaison de lettres majuscules, de chiffres et de caractères spéciaux, avec une longueur minimale de 8 caractères.
   - **Email :** Doit suivre un format valide d'adresse email.
   - **Téléphone :** Doit suivre le format d'un numéro de téléphone valide.
   - **Date :** Doit être une date valide dans le format `JJ/MM/AAAA`.
4. **Affichez des messages d'erreur pertinents sous chaque champ en cas d'entrée invalide.** Utilisez le retour visuel pour informer l'utilisateur des erreurs détectées.
5. **Testez le formulaire pour vous assurer que les validations sont appliquées correctement et que les messages d'erreur sont clairs.** Vérifiez également que le formulaire ne peut pas être soumis tant que toutes les validations ne sont pas passées.

Cet exercice vise à renforcer vos compétences en validation des entrées utilisateur dans les applications React, en vous permettant de manipuler des techniques de validation avancées et de gestion d'erreurs, tout en intégrant les composants de Semantic UI React pour une interface utilisateur homogène.

# 10 - Correction 1 - VALIDATION 

## Pour atteindre l'objectif de validation des entrées utilisateur dans le formulaire React, nous allons suivre les étapes suivantes :

1. Ajouter les nouveaux champs au formulaire : email, téléphone et date.
2. Implémenter les validations pour chaque champ, en affichant des messages d'erreur pertinents.
3. Assurer que le formulaire ne peut être soumis que si toutes les validations sont passées.

- Voici le code mis à jour avec les nouvelles fonctionnalités de validation :

```jsx
import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // Réinitialiser le message d'erreur lorsque l'utilisateur commence à modifier un champ
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validation pour le nom d'utilisateur
    if (formData.username.trim().length < 5 || formData.username.trim().length > 15) {
      newErrors.username = 'Le nom d\'utilisateur doit contenir entre 5 et 15 caractères alphanumériques.';
    }

    // Validation pour le mot de passe
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Le mot de passe doit inclure une combinaison de lettres majuscules, de chiffres et de caractères spéciaux, avec une longueur minimale de 8 caractères.';
    }

    // Validation pour l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse email valide.';
    }

    // Validation pour le téléphone
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Veuillez saisir un numéro de téléphone valide (10 chiffres).';
    }

    // Validation pour la date (format JJ/MM/AAAA)
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    if (!dateRegex.test(formData.date)) {
      newErrors.date = 'Veuillez saisir une date valide (format JJ/MM/AAAA).';
    }

    // Vérifier s'il y a des erreurs
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Soumission du formulaire si aucune erreur n'est trouvée
      alert('Le formulaire a été soumis avec succès !');
      setErrors({});
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <Message negative>{errors.username}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <Message negative>{errors.password}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <Message negative>{errors.email}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Téléphone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <Message negative>{errors.phone}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <Message negative>{errors.date}</Message>}
        </Form.Field>
        <Button type="submit" primary>Soumettre</Button>
      </Form>
    </div>
  );
}

export default App;
```

- Ce code ajoute les nouveaux champs au formulaire et implémente des validations pour chacun d'eux, ainsi que pour les champs existants.
- Les messages d'erreur pertinents sont affichés sous chaque champ en cas d'entrée invalide.
- Le formulaire ne peut être soumis que si toutes les validations sont passées.
- Si vous voulez avoir un numéro de téléphone canadien de cette forme (xxx) xxx- xxxx alors utilisez ce regex :

```javascript
const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
```
- Ce regex valide les numéros de téléphone suivant le format demandé : (xxx) xxx-xxxx.

# 11 - Version plus élégante ?  opérateur ternair 🔥 🔥 🔥


- Utilisons l'opérateur ternaire pour gérer l'affichage conditionnel des messages d'erreur.
- L'opérateur ternaire est souvent utilisé pour rendre le code plus concis et facile à lire.
- Voici une version améliorée du code avec l'utilisation de l'opérateur ternaire :

```jsx
import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    date: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validation pour le nom d'utilisateur
    newErrors.username = (formData.username.trim().length < 5 || formData.username.trim().length > 15) ? 'Le nom d\'utilisateur doit contenir entre 5 et 15 caractères alphanumériques.' : '';

    // Validation pour le mot de passe
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    newErrors.password = (!passwordRegex.test(formData.password)) ? 'Le mot de passe doit inclure une combinaison de lettres majuscules, de chiffres et de caractères spéciaux, avec une longueur minimale de 8 caractères.' : '';

    // Validation pour l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    newErrors.email = (!emailRegex.test(formData.email)) ? 'Veuillez saisir une adresse email valide.' : '';

    // Validation pour le téléphone
    const phoneRegex = /^\d{10}$/;
    newErrors.phone = (!phoneRegex.test(formData.phone)) ? 'Veuillez saisir un numéro de téléphone valide (10 chiffres).' : '';

    // Validation pour la date (format JJ/MM/AAAA)
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
    newErrors.date = (!dateRegex.test(formData.date)) ? 'Veuillez saisir une date valide (format JJ/MM/AAAA).' : '';

    // Vérifier s'il y a des erreurs
    setErrors(newErrors);
    if (Object.values(newErrors).every(value => value === '')) {
      alert('Le formulaire a été soumis avec succès !');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', paddingTop: '50px' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <Message negative>{errors.username}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <Message negative>{errors.password}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <Message negative>{errors.email}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Téléphone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <Message negative>{errors.phone}</Message>}
        </Form.Field>
        <Form.Field>
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <Message negative>{errors.date}</Message>}
        </Form.Field>
        <Button type="submit" primary>Soumettre</Button>
      </Form>
    </div>
  );
}

export default App;
```

- Cette version utilise l'opérateur ternaire pour définir les messages d'erreur dans la fonction `handleSubmit`, ce qui rend le code plus compact et facile à lire.
- Chaque validation est effectuée en une seule ligne, ce qui rend le processus de validation plus clair.
- Les messages d'erreur sont toujours affichés de la même manière que dans la version précédente.

# Annexe : Rappel sur les Expressions Régulières en JavaScript : Guide Débutant

Les expressions régulières (ou regex) sont des outils puissants utilisés pour rechercher, valider et manipuler des chaînes de caractères selon des motifs spécifiques. Ce guide est conçu pour les débutants en JavaScript et vise à fournir une introduction claire et concise aux expressions régulières.

## Qu'est-ce qu'une expression régulière ?

Une expression régulière est un motif de recherche qui décrit un ensemble de chaînes de caractères selon des règles spécifiques. En JavaScript, les expressions régulières sont créées en utilisant l'objet `RegExp` ou en utilisant une syntaxe littérale en encadrant le motif entre deux barres obliques `/`.

## Syntaxe de base

### Utilisation de l'objet `RegExp` :

```javascript
const regex = new RegExp('pattern');
```

### Syntaxe littérale :

```javascript
const regex = /pattern/;
```

## Exemples de motifs simples :

- **/hello/** : Recherche la chaîne "hello".
- **/^[A-Z][a-z]+$/** : Recherche des mots commençant par une majuscule, suivis de lettres minuscules (par exemple, "Hello", "World").
- **/^[0-9]{5}$/** : Recherche des chaînes de cinq chiffres (par exemple, "12345").
- **/^\d{3}-\d{3}-\d{4}$/** : Recherche des numéros de téléphone au format "xxx-xxx-xxxx" (par exemple, "123-456-7890").

## Caractères de début et de fin

- **`^`** : Représente le début de la chaîne.
- **`$`** : Représente la fin de la chaîne.

Ces caractères sont utilisés pour indiquer que le motif doit correspondre au début ou à la fin de la chaîne, respectivement.

## Méthodes de recherche

En JavaScript, les expressions régulières peuvent être utilisées avec les méthodes suivantes pour effectuer des recherches dans des chaînes de caractères :

- **`test()`** : Teste si le motif correspond à une partie de la chaîne.
- **`exec()`** : Recherche le premier motif correspondant dans une chaîne et renvoie les détails.

Exemple d'utilisation avec `test()` :

```javascript
const regex = /hello/;
const text = 'Bonjour, hello World!';
const isMatch = regex.test(text);
console.log(isMatch); // Renvoie true
```

## Ressources supplémentaires

- [MDN Web Docs - Expressions régulières](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_reguli%C3%A8res)
- [RegExr - Tester les expressions régulières en ligne](https://regexr.com/)

- Ce guide fournit une introduction de base aux expressions régulières en JavaScript.
- Pour explorer davantage ce sujet et comprendre des motifs plus avancés, nous vous recommandons de consulter les ressources supplémentaires fournies ci-dessus.
