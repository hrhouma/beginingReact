# Partie 4 - Guide des formulaires React

- Les formulaires sont un aspect essentiel du développement web, et React offre des fonctionnalités puissantes pour les gérer de manière efficace. 
- Ce guide vous aidera à comprendre comment créer et gérer des formulaires dans vos applications React.

## Création d'un formulaire

Pour créer un formulaire dans React, utilisez la balise `<form>` et incluez les éléments de saisie à l'intérieur. Voici un exemple de base :

```jsx
import React, { useState } from 'react';

function MyForm() {
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

export default MyForm;
```

- Dans cet exemple, nous utilisons le hook `useState` pour gérer l'état du formulaire.
- `handleChange` met à jour l'état chaque fois qu'un champ de saisie est modifié, et `handleSubmit` est appelé lorsque le formulaire est soumis.

## Gestion des données du formulaire

- React permet de stocker les données du formulaire dans l'état local du composant à l'aide de hooks comme `useState`. 
- Cela rend la gestion des données du formulaire plus intuitive et facilite la mise à jour de l'interface utilisateur en fonction des saisies de l'utilisateur.

## Validation des formulaires

- La validation des formulaires est une étape importante pour s'assurer que les données saisies par l'utilisateur sont correctes. 
- Vous pouvez valider les données du formulaire en ajoutant des conditions dans `handleSubmit` ou en utilisant des bibliothèques de validation tierces telles que `formik` ou `yup`.
==> Sujet de la partie suivante ! 
