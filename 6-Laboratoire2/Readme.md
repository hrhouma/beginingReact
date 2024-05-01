# Énoncé de Projet pour le Laboratoire React (Date de remise et de présentation : 17 mai 2024)

# Description du Projet
- Ce projet vous engage à partir d'un code de base en React, intégrant Semantic UI et React Router, pour développer une application enrichie de **trois** nouvelles fonctionnalités.
- Vous utiliserez pour cela trois appels API distincts provenant de l'API RestCountries (voir **Annexe #1**).
- Chaque fonctionnalité sera accessible via un onglet dédié au sein de l'application.

## Fonctionnalités Requises
1. **API Diversification**:
- Chaque onglet de votre application devra exploiter un endpoint différent de l'API RestCountries.
- Sélectionnez des endpoints qui permettent de créer des fonctionnalités à la fois intéressantes, pratiques et surtout **cohérantes**.

## Exigences Techniques
1. **Navigation**: Implémentez `React Router v6` pour faciliter la navigation entre les différents onglets de l'application.
2. **Gestion Globale**: Employez `useContext` pour gérer les données globales de l'application, telles que la langue et/ou les préférences utilisateur.
3. **Formulaires Interactifs**: Conçoivez des formulaires permettant aux utilisateurs de filtrer ou rechercher des informations spécifiques, en veillant à leur accessibilité et à leur validation correcte.
4. **Librairie CSS**: Intégrez une librairie CSS comme Semantic UI, Bulma, Material UI ou Bootstrap pour styliser efficacement votre interface utilisateur (Je vous donne le choix de choisir votre librairie CSS).

## Dates Importantes
- **Date Limite de Soumission**: 17 mai 2024.
- **Présentation**: Les présentations se tiendront le 17 mai 2024, incluant une démo de l'application et une session de questions-réponses pour discuter de vos choix techniques et de votre approche.

## Livrables
- **Code Source**: Fournissez le code source complet de l'application, y compris tous les fichiers de configuration et dépendances.
- **Documentation**: Rédigez un document détaillant le fonctionnement de l'application, les choix techniques faits, et un guide utilisateur pour naviguer dans l'application.
- **Démonstration**: Présentez une démonstration en classe de votre application, expliquant les fonctionnalités implémentées et les interactions possibles.

- Ce laboratoire #2 représente une opportunité formidable pour vous montrer vos compétences en développement React en construisant une application fonctionnelle et esthétiquement agréable.
- La gestion du temps et la capacité à communiquer efficacement vos idées seront des critères essentiels d'évaluation.


# Grille d'évaluation: 

- Voici la grille d'évaluation détaillée pour le laboratoire #2 (Assurez-vous d'expliquer comment vous avez intégré ces fonctionnalités dans votre rapport) :

| Critères                                    | Détails                                                                                                                                                              | Poids  |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| **Fondamentaux de React**                   | Compréhension de React.js, ses usages et différences avec d'autres frameworks.                                                                                       | 5%     |
| **Utilisation des Props**                   | Bonne utilisation des props pour passer les données entre les composants.                                                                                             | 5%     |
| **Utilisation des États**                   | Mise en œuvre et gestion des états locaux avec `useState`.                                                                                                           | 5%     |
| **Gestion des Formulaires**                 | Création de formulaires, gestion des données avec `useState`, validation et accessibilité.                                                                           | 10%    |
| **Utilisation de React Router Dom v6**      | Mise en place du routage avec les composants de React Router v6 tels que `<Routes>`, `<Route>`, et `useNavigate`.                                                    | 5%     |
| **Utilisation d'une librairie CSS rapide**  | Intégration et utilisation efficace d'une bibliothèque CSS comme Semantic UI, Bulma ou Bootstrap pour le style de l'application.                                      | 5%     |
| **Utilisation de `Outlet`**                 | Bonne utilisation de `<Outlet />` pour le rendu de composants imbriqués dans le routage.                                                                             | 5%     |
| **Variables Calculées**                     | Création et utilisation de variables calculées pour rendre le code plus clair et optimisé.                                                                           | 5%     |
| **Utilisation de Hooks (Params, Navigate)** | Utilisation correcte des hooks tels que `useParams` pour récupérer des paramètres de route et `useNavigate` pour la navigation programmée.                            | 5%     |
| **Utilisation de `useHistory` et Fonctions**| Gestion de l'historique de navigation et utilisation des fonctions associées à `useHistory` (remarque: `useHistory` n'est plus en v6, remplacé par `useNavigate`).   | 5%     |
| **Rendu Conditionnel**                      | Mise en œuvre de rendus conditionnels pour gérer l'affichage des composants en fonction de l'état ou des conditions spécifiques.                                     | 5%     |
| **Présentation et Documentation**           | Clarté de la documentation, explication des choix de conception, démonstration de la compréhension des fonctionnalités et des technologies utilisées.                 | 5%     |
| **Création et Gestion de Contexte**         | Utilisation de `useContext` pour créer et consommer des contextes globaux dans l'application, facilitant ainsi le partage de l'état sans prop drilling.                | 5%     |
| **Pagination et Filtres**                   | Implémentation de la pagination et des filtres pour gérer efficacement les données visualisées, particulièrement utile pour de grandes quantités de données.          | 5%     |
| **Gestion des Événements**                  | Configuration et gestion correcte des événements dans les composants React pour une interaction utilisateur réactive.                                                 | 5%     |


## Remarque Importante sur l'Évaluation du Projet

- Même si vous travaillez en groupe sur ce projet, il est important de noter que chaque membre du groupe pourrait recevoir une note différente en fonction de sa contribution individuelle au projet et de ses réponses lors de la session de questions-réponses.
- Par exemple, il est possible que certains membres du groupe obtiennent un score parfait de 100%, tandis que d'autres pourraient se voir attribuer un score de 0% si l'enseignant juge qu'un étudiant n'a pas significativement contribué ou n'a pas activement participé aux phases critiques du projet.
- Assurez-vous donc de collaborer efficacement et de participer activement pour optimiser votre apprentissage et votre évaluation.


# Annexe 1 

Voici une énumération simplifiée des endpoints disponibles pour l'API RestCountries que vous pourriez utiliser pour développer les fonctionnalités de votre application React :

1. **Latest added Endpoint** - Montre les dernières mises à jour des données des pays.
2. **Independent** - Liste tous les pays indépendants.
3. **All** - Affiche toutes les données disponibles de tous les pays.
4. **Name** - Permet de rechercher les pays par nom.
5. **Full Name** - Recherche de pays par leur nom complet.
6. **Code** - Recherche de pays par leur code ISO.
7. **List of codes** - Affiche une liste de différents codes utilisés pour les pays (par exemple, ISO, téléphone).
8. **Currency** - Montre les pays qui utilisent une certaine monnaie.
9. **Demonym** - Récupère les dénominations utilisées pour les habitants des pays.
10. **Language** - Affiche les pays en fonction de la langue parlée.
11. **Capital city** - Affiche les pays en fonction de leur capitale.
12. **Calling code** - Montre les pays en fonction de leur indicatif téléphonique.
13. **Region** - Filtre les pays par région géographique.
14. **Subregions** - Filtre les pays par sous-régions.
15. **Translation** - Affiche les traductions du nom du pays dans différentes langues.
16. **Filter Response** - Permet de filtrer les réponses de l'API selon des critères spécifiques.
17. **Similar projects** - Montre des projets similaires ou relatifs.
