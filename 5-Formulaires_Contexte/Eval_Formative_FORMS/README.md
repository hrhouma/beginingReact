# 1 - Ex01 : Illusrez la différence entre version 1 et version 2 refactorisée !

Voici une illustration des différences entre la version 1 et la version 2 du code :

**Version 1 (Code Source Initial) :**

- **Structure linéaire dans un seul fichier :** Tous les composants de formulaire, la gestion d'état et la logique de validation sont inclus dans un seul composant `App.js`.
- **Utilisation de multiples `useState` :** Chaque champ du formulaire utilise son propre `useState` pour gérer son état individuellement.
- **Logique conditionnelle pour l'affichage des champs :** Les champs du formulaire sont affichés conditionnellement en fonction de l'état de validation du champ précédent.
- **Répétition de code :** Il y a beaucoup de répétition dans le code pour la validation et l'affichage des champs, ce qui peut être optimisé pour améliorer la lisibilité et la maintenabilité.

**Version 2 (Code Source Amélioré Basé sur l'Image) :**

- **Réusabilité accrue :** Les composants `Ligne.jsx` et `Table.jsx` sont utilisés pour séparer les préoccupations et rendre le code plus modulaire, facilitant ainsi la réutilisation et la maintenance.
- **Utilisation de ressources JSON :** Les fichiers `Erreurs.json` et `Labels.json` sont utilisés pour centraliser et gérer les messages d'erreur et les étiquettes de manière plus dynamique, améliorant ainsi la maintenance.
- **Abstraction :** Le fichier `Pays.jsx` semble être une abstraction pour gérer les options de pays, ce qui permet une meilleure séparation des préoccupations et une réutilisation facilitée.
- **Intégration des nouvelles exigences :** La version 2 propose des suggestions pour améliorer la gestion des états, la validation, l'accessibilité, la réorganisation du code et l'ajout de tests pour garantir la fiabilité du code.
- **Utilisation de Contexte React et de react-router-dom :** La version 2 suggère l'utilisation de Contexte React pour partager l'état entre différents composants et de react-router-dom pour gérer la navigation si l'application comporte plusieurs pages.

En résumé, la version 2 représente une amélioration significative de la structure, de la réutilisabilité, de la maintenance et de la robustesse du code par rapport à la version 1.

# 2 - Ex02 - Votre tâche ! La version 3 !!!!

**Évaluation pour la Version 3 du Projet :**

**Objectif :** Intégrer les concepts de Gestion des États avec `useState`, Variables Calculées avec `useMemo`, Contexte React avec `createContext` et `useContext`, Routage avec `react-router-dom`, Formulaires et Validation, et Amélioration de l'Accessibilité à la version 2 du projet.

**Tâches :**

1. **Gestion des États avec `useState` :**
   - Utiliser `useState` pour gérer les états locaux des composants.
   - Manipuler les états pour contrôler les composants de formulaire.

2. **Variables Calculées avec `useMemo` :**
   - Utiliser `useMemo` pour optimiser les performances en évitant des recalculs coûteux.

3. **Contexte React avec `createContext` et `useContext` :**
   - Créer un contexte global pour partager des données entre plusieurs composants sans prop-drilling.
   - Consommer le contexte dans les composants enfants pour accéder et manipuler les données partagées.

4. **Routage avec `react-router-dom` :**
   - Mettre en place un système de routage pour naviguer entre différentes vues de l'application.
   - Utiliser `Route`, `Routes`, et `BrowserRouter` pour configurer le routage.
   - Capturer des paramètres d'URL avec `useParams` pour filtrer les données basées sur l'URL.

5. **Formulaires et Validation :**
   - Gérer les données de formulaire avec `useState`.
   - Valider les entrées du formulaire pour améliorer l'expérience utilisateur et garantir la qualité des données.

6. **Accessibilité :**
   - Améliorer l'accessibilité des formulaires en utilisant des labels appropriés et des gestions d'erreur accessibles.

**Livrables Attendus :**

- Un code source refactorisé intégrant les concepts mentionnés ci-dessus.
- Des commentaires appropriés expliquant l'utilisation de chaque concept et son rôle dans le code.
- Une démonstration fonctionnelle de l'application, mettant en évidence les améliorations apportées par rapport à la version précédente.

**Critères d'Évaluation :**

- Implémentation correcte et efficace des concepts demandés.
- Utilisation appropriée des hooks React (`useState`, `useMemo`, `createContext`, `useContext`, etc.).
- Mise en œuvre réussie du routage avec `react-router-dom` pour une navigation fluide entre les vues de l'application.
- Gestion des formulaires avec validation et amélioration de l'accessibilité.
- Lisibilité, maintenabilité et propreté du code.
- Respect des bonnes pratiques de développement React et des normes de codage.

# 3 - Résumé : 

Bien sûr ! Voici un guide étape par étape pour intégrer les concepts demandés à partir de la version 2 du projet :

1. **Gestion des États avec `useState` :**
   - Identifiez les endroits où vous utilisez déjà `useState` pour gérer les états locaux des composants. Cela peut être dans des composants comme `Ligne.jsx`, `Table.jsx`, etc.
   - Assurez-vous que vous utilisez `useState` de manière appropriée pour gérer les états des composants de formulaire, tels que les valeurs des champs de saisie, les états de validation, etc.
   - Si nécessaire, refactorisez le code pour utiliser `useState` de manière plus efficace en consolidant les états lorsque cela est logique.

2. **Variables Calculées avec `useMemo` :**
   - Identifiez les calculs dérivés de l'état ou des props qui sont effectués à plusieurs reprises dans votre application.
   - Utilisez `useMemo` pour encapsuler ces calculs et éviter des recalculs coûteux à chaque rendu.
   - Assurez-vous de passer les dépendances appropriées à `useMemo` pour que les calculs soient mis à jour lorsque les données auxquelles ils dépendent changent.

3. **Contexte React avec `createContext` et `useContext` :**
   - Créez un fichier séparé pour votre contexte global, par exemple `MyContext.js`.
   - Utilisez `createContext` pour créer votre contexte global et exportez-le.
   - Identifiez les données que vous souhaitez partager entre les composants et placez-les dans le contexte.
   - Utilisez `useContext` dans les composants enfants pour accéder aux données partagées à partir du contexte.

4. **Routage avec `react-router-dom` :**
   - Installez `react-router-dom` si ce n'est pas déjà fait en utilisant npm ou yarn.
   - Créez un fichier `Routes.jsx` ou similaire pour configurer vos routes.
   - Utilisez `<BrowserRouter>` autour de votre application dans le fichier principal.
   - Utilisez `<Routes>` et `<Route>` pour définir les différentes vues de votre application.
   - Utilisez `useParams` pour récupérer les paramètres d'URL dans les composants qui nécessitent des données basées sur l'URL.

5. **Formulaires et Validation :**
   - Utilisez `useState` pour gérer les données de formulaire, comme vous le faites déjà.
   - Intégrez une logique de validation plus robuste pour vos formulaires. Cela peut inclure la vérification des longueurs de chaîne, des formats de courriel, etc.
   - Désactivez le bouton de soumission du formulaire tant que les champs ne sont pas valides.
   - Assurez-vous que les messages d'erreur de validation sont clairs et accessibles.

6. **Accessibilité :**
   - Vérifiez chaque champ de formulaire pour vous assurer qu'il est correctement étiqueté à l'aide de balises `<label>`.
   - Assurez-vous que les messages d'erreur de validation sont annoncés correctement par des lecteurs d'écran.
   - Testez votre application avec des outils d'accessibilité pour identifier et corriger les problèmes éventuels.

En suivant ces étapes, vous devriez être en mesure d'intégrer avec succès les concepts demandés à partir de la version 2 de votre projet. N'hésitez pas à consulter la documentation officielle de React et des bibliothèques tierces pour des instructions détaillées sur la mise en œuvre de chaque concept.
