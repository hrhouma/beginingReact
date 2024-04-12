# Exercice de Programmation (Exercice 7, Exercice 8 et Exercice 9) : Extension d'une Application avec React Router DOM v6 et REST Countries API

### Objectif
L'objectif de cet exercice est de développer votre compréhension de React, en particulier l'utilisation de `react-router-dom` version 6, ainsi que l'intégration d'API externes. Vous allez étendre une application existante qui utilise l'API REST Countries pour inclure des fonctionnalités supplémentaires.

### Contexte
Vous avez déjà travaillé sur une application qui récupère des informations sur les pays en utilisant deux appels API spécifiques à REST Countries. Dans cet exercice, vous ajouterez une nouvelle page à cette application qui utilisera un autre endpoint de l'API REST Countries pour afficher des informations plus détaillées ou différentes.

### Exigences Techniques
1. **React et React Router DOM** :
   - Utilisez React pour le framework frontal.
   - Intégrez `react-router-dom` version 6 pour la gestion des routes. Utilisez les composants `Routes` et `Route` au lieu de `Switch`, qui est obsolète dans cette version.
  
2. **API REST Countries** :
   - Intégrez un nouveau endpoint de l'API REST Countries. Choisissez parmi les suivants : 
     - **Currency**: Affiche des informations sur la devise d'un pays.
     - **Language**: Montre les langues parlées dans un pays.
     - **Capital City**: Affiche la capitale du pays.
     - **Calling Code**: Affiche le code d'appel du pays.
   - Vous pouvez accéder à l'API via des requêtes fetch dans React.

3. **Nouvelle Page** :
   - Créez une nouvelle page dans l'application qui utilise le endpoint sélectionné.
   - La page doit être accessible via la navigation de l'application et intégrée avec React Router.

### Consignes
1. **Clonez le projet initial** (fournir le lien GitHub si applicable).
2. **Installation** :
   - Installez les dépendances nécessaires via npm ou yarn.
   - Assurez-vous que `react-router-dom` est mis à jour à la version 6.
3. **Développement** :
   - Ajoutez une nouvelle route pour votre nouvelle page utilisant le endpoint choisi.
   - Implémentez la logique pour fetcher les données de l'API et les afficher de manière appropriée sur la page.
4. **Testing** :
   - Testez votre application pour s'assurer que les nouvelles fonctionnalités fonctionnent correctement et que les routes sont correctement configurées.

### Livrables
Soumettez votre code via un pull request sur le repository de classe. Assurez-vous d'inclure des captures d'écran de votre nouvelle fonctionnalité en action, ainsi qu'une brève description des défis rencontrés et comment vous les avez surmontés.

### Évaluation
Votre travail sera évalué sur la base de :
   - La fonctionnalité : L'application fonctionne-t-elle comme prévu ?
   - La qualité du code : Le code est-il bien organisé et commenté ?
   - L'intégration avec les fonctionnalités existantes : La nouvelle fonctionnalité s'intègre-t-elle bien avec le reste de l'application ?
