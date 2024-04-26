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


# Code complet num1 de la partie bonus :
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

# 5 -  (facultatif) Aller plus loin et exploration des autres composants Semantic UI React :

Semantic UI React propose une grande variété de composants pour créer des interfaces utilisateur riches et réactives. Vous pouvez explorer la documentation de Semantic UI React et expérimenter avec différents composants pour améliorer votre application. Voici quelques composants que vous pourriez intégrer :
- **Dropdown**: Pour les sélections déroulantes.
- **Modal**: Pour les fenêtres modales et les boîtes de dialogue.
- **Accordion**: Pour les sections extensibles et rétractables.
- **Menu**: Pour les menus de navigation.
- **Card**: Pour afficher des contenus sous forme de cartes.

N'hésitez pas à utiliser ces composants pour améliorer l'expérience utilisateur de votre application.



D'accord, voici l'ajout du point 6 sous forme d'exercice pour la partie sur la validation des entrées dans les formulaires React, sans y inclure la correction :

Parfait, voici le texte reformulé pour l'exercice avec les ajouts spécifiques demandés et l'utilisation de Semantic UI :

# 6 - Exercice pour renforcer la validation des entrées

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

# 7 - Correction - VALIDATION 
