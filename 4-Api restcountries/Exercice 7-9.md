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
     - **Autre** : Explorez https://restcountries.com/ et ragrdez les endpoints etc ....
   - Vous pouvez accéder à l'API via des requêtes fetch dans React.

3. **Nouvelle Page** :
   - Créez une nouvelle page dans l'application qui utilise le endpoint sélectionné.
   - La page doit être accessible via la navigation de l'application et intégrée avec React Router.

### Consignes
1. **Consultez les travaux réalisés en classe** :
    - Documentation de l'application Drapeau version finale ( Restcountries version 3.1 et react-router-dom version 5): https://docs.google.com/document/d/1zSijnLruezkFCCT5aU88GLBufukFgDQazPZb3ZRWUqo/edit?usp=sharing
    - Lien Github :
         - ### `git clone https://github.com/hrhouma/restcoun_react-router-dom5_api_3.git`
         - ### `cd restcoun_react-router-dom5_api_3`
         - ### `npm install`
         - ### `npm start`
    - Lien API v3 : https://restcountries.com/v3.1/alpha/{code}
        
    - (OPTIONNEL) Documentation de l'ancienne application Drapeau (old)  ( Restcountries version 2 et react-router-dom version 5): https://docs.google.com/document/d/1iYxr2iEA3rqxVu-0mB2SNxY1Dt5jLnrw/edit?usp=sharing&ouid=114388549516551190899&rtpof=true&sd=true
    - Lien Github :
         - ### `git clone https://github.com/hrhouma/restcoun_react-router-dom5_api_3.git`
         - ### `cd restcoun_react-router-dom5_api_3`
         - ### `npm install`
         - ### `npm start`
         ## ==> En cas d'erreurs
         - ### `npm audit fix`
         - ### `npm start`
         ## ==> En cas d'erreurs encore
         - ### `npm audit fix --force` 
         - ### `npm start`
- Lien API v2 :
![image](https://github.com/hrhouma/beginingReact/assets/10111526/a4f27890-ad39-42f5-9aa8-41b6fb09d665)

    - (OPTIONNEL) Autre documentation optionelle (ateliers introduction react-router-dom + projets de restcountries): https://drive.google.com/drive/folders/1AEVUnc6X0h2ebLexpG3hQl6K2Wu2_I_Q?usp=sharing
      
1. **Démarrez un nouveau projet en utilisant les commandes suivantes**:  
    - ### `npm install -g create-react-app`
    - ### `npx creare-recat-app exercice789`
    - ### `cd exercice789`
    - ### `npm start`
2. **(Optionnel) Clonez le projet initial pour votre référence** : Lien --> 
5. **Installation** :
   - Installez les dépendances nécessaires via npm.
   - Assurez-vous que `react-router-dom` est mis à jour à la version 6.
6. **Consultez l'API restcountries** : https://restcountries.com/
7. **Faites votre choix de l'endpoint ici** : https://docs.google.com/document/d/1M28QPFBGTG0DcTDMMwoUiGDPSXKzzWRyCvOmZyW8Mvw/edit?usp=sharing
8. **Développement** :
   - Ajoutez une nouvelle route pour votre nouvelle page utilisant le endpoint choisi.
   - Implémentez la logique pour fetcher les données de l'API et les afficher de manière appropriée sur la page.

### Livrables
- (Optionnel) Soumettez votre code via un pull request sur le repository de classe (lien suivra). 
- (Obligatoire - Imprimes-écrans et petit rapport) Assurez-vous d'inclure des captures d'écran de votre nouvelle fonctionnalité en action, ainsi qu'une brève description des défis rencontrés et comment vous les avez surmontés.
- (Obligatoire) - Soumettre le code via LÉA sans le dossier nodes_modules
- (Obligatoire) : Je fais le tour le 17 mai pour consulter votre travail. 

### Évaluation
Votre travail sera évalué sur la base de :
   - La fonctionnalité : L'application fonctionne-t-elle comme prévu ?
   - La qualité du code : Le code est-il bien organisé et commenté ?
   - L'intégration avec les fonctionnalités existantes : La nouvelle fonctionnalité s'intègre-t-elle bien avec le reste de l'application ?
