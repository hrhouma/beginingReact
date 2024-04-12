# Exercice de Programmation : Extension d'une Application avec React Router DOM v6 et REST Countries API

## Objectif
Développer une compréhension approfondie de React, en particulier l'utilisation de `react-router-dom` version 6 et l'intégration d'APIs externes comme REST Countries API. L'exercice consiste à étendre une application existante pour y ajouter des fonctionnalités supplémentaires.

## Contexte
Vous avez précédemment travaillé sur une application récupérant des informations sur les pays via l'API REST Countries. Vous ajouterez une page qui consommera un autre endpoint de cette API pour afficher des informations plus détaillées.

## Exigences Techniques
1. **React et React Router DOM**:
   - Utilisez React comme framework frontal.
   - Intégrez `react-router-dom` version 6 pour la gestion des routes. Remplacez l'usage de `Switch` par `Routes` et `Route`, `Switch` étant obsolète.

2. **API REST Countries**:
   - Intégrez un nouvel endpoint de l'API REST Countries, choisissez parmi les suivants :
     - **Currency**: Informations sur la devise d'un pays.
     - **Language**: Langues parlées dans un pays.
     - **Capital City**: Capitale du pays.
     - **Calling Code**: Code d'appel du pays.
     - **Autre**: Explorez d'autres endpoints disponibles sur [REST Countries](https://restcountries.com/).
   - Utilisez des requêtes fetch dans React pour accéder à l'API.

3. **Nouvelle Page**:
   - Créez une page dans l'application pour le nouvel endpoint sélectionné.
   - Rendez cette page accessible via la navigation de l'application et intégrez-la avec React Router.

## Consignes
# 1. Consultez les travaux réalisés en classe :
1.1. **Documentation de l'application Drapeau version finale** (Restcountries version 3.1 et react-router-dom version 5): [Lire la documentation](https://docs.google.com/document/d/1zSijnLruezkFCCT5aU88GLBufukFgDQazPZb3ZRWUqo/edit?usp=sharing)
1.2. **Lien Github** :
   - Clonez le dépôt avec `git clone https://github.com/hrhouma/restcoun_react-router-dom5_api_3.git`
   - Changez de répertoire avec `cd restcoun_react-router-dom5_api_3`
   - Installez les dépendances avec `npm install`
   - Lancez l'application avec `npm start`

1.3.**Lien API v3** : [API REST Countries v3](https://restcountries.com/v3.1/)


## Exemples: 
![image](https://github.com/hrhouma/beginingReact/assets/10111526/5992452e-0149-4ea8-9113-20602f609705)
![image](https://github.com/hrhouma/beginingReact/assets/10111526/47bd2018-773a-4eb8-b3c2-46bad43deb2e)

# (À IGNORER) 2. Consultez les anciennes versions : 

2.1. **(OPTIONNEL) Documentation de l'ancienne application Drapeau (old)  ( Restcountries version 2 et react-router-dom version 5):**
    - https://docs.google.com/document/d/1iYxr2iEA3rqxVu-0mB2SNxY1Dt5jLnrw/edit?usp=sharing&ouid=114388549516551190899&rtpof=true&sd=true 
    

2.2. **(OPTIONNEL) Lien Github :**
   - Clonez le dépôt :
     ```
     git clone https://github.com/hrhouma/restcoun_react-router-dom5_api_2.git
     cd restcoun_react-router-dom5_api_2
     npm install
     npm start
     ```
   - En cas d'erreurs, exécutez :
     ```
     npm audit fix
     npm start
     ```
   - Si les erreurs persistent :
     ```
     npm audit fix --force
     npm start
     ```

         
  2.3. **Lien API v2 :** [API REST Countries v2](https://restcountries.eu/rest/v2/) 

## Exemples: 
![image](https://github.com/hrhouma/beginingReact/assets/10111526/a4f27890-ad39-42f5-9aa8-41b6fb09d665)
![image](https://github.com/hrhouma/beginingReact/assets/10111526/8a3bc7d0-1f56-49ed-8089-0f0d9f213e31)
![image](https://github.com/hrhouma/beginingReact/assets/10111526/7058ef78-98d2-43ed-adc0-cc4156cba4a8)

# (À IGNORER) 3. **Autre documentation optionelle** 

3.1.**(OPTIONNEL) Autre documentation optionelle (ateliers introduction react-router-dom + projets de restcountries):** https://drive.google.com/drive/folders/1AEVUnc6X0h2ebLexpG3hQl6K2Wu2_I_Q?usp=sharing

# 4. **Démarrez votre projet ** 

4.1. **Démarrez un nouveau projet en utilisant les commandes suivantes**:  
    - ### `npm install -g create-react-app`
    - ### `npx creare-recat-app exercice789`
    - ### `cd exercice789`
    - ### `npm start`
 4.2. **(Optionnel) Clonez le projet initial pour votre référence (comme autre projet)** : 
   - Lien --> https://github.com/hrhouma/restcoun_react-router-dom5_api_3
   - ou ### `git clone https://github.com/hrhouma/restcoun_react-router-dom5_api_3.git`
 4.3. **Installation** :
   - Installez les dépendances nécessaires via npm.
         - ### `npm install react-router-dom --save` 
   - Assurez-vous que `react-router-dom` est mis à jour à la version 6 en vérifiant dans votre fichier package.json.
     
4. **Consultez l'API restcountries** : https://restcountries.com/
5. **Faites votre choix de l'endpoint ici** : https://docs.google.com/document/d/1M28QPFBGTG0DcTDMMwoUiGDPSXKzzWRyCvOmZyW8Mvw/edit?usp=sharing
6. **Développement** :
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
