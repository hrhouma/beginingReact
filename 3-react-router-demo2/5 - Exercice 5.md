# Exercice formatif

**Objectif :** Créer une application React simple qui utilise React Router pour naviguer entre une page d'accueil et une page de résultats de recherche, en passant le terme de recherche via l'URL.

**Instructions :**

1. Suivez le tutoriel fourni (Exercice formatif) pour mettre en place l'application.
2. Testez votre application pour vous assurer que la navigation et le passage des données fonctionnent comme attendu.
3. (Optionnel) Ajoutez des styles CSS à votre application pour améliorer son apparence.

Après avoir terminé et testé l'exercice formatif, passons à l'exercice évalué qui comprendra des fonctionnalités supplémentaires et nécessitera une compréhension plus approfondie de React Router, ainsi que des manipulations plus avancées des états et des paramètres d'URL.

# Exercice évalué

**Objectif :** Étendre l'application de l'exercice formatif pour inclure une fonctionnalité de visualisation des détails d'un élément de recherche simulé, en utilisant un ensemble de données statiques.

**Contexte :** Imaginez que l'application de recherche renvoie une liste d'articles de blog basée sur le terme de recherche. Chaque article a un ID, un titre, et un résumé. L'utilisateur peut cliquer sur un article pour voir ses détails sur une nouvelle page.

**Instructions :**

1. **Extension du modèle de données :** Créez un fichier `data.js` dans le dossier `src` qui exporte un tableau d'objets représentant des articles de blog. Chaque objet doit avoir un `id`, un `title`, et un `summary`.

    ```js
    // data.js
   export const articles = [
    { id: 1, title: 'Article 1', summary: 'Résumé de l\'article 1. Ceci est une introduction à React Router.' },
    { id: 2, title: 'Article 2', summary: 'Résumé de l\'article 2. Apprenez à gérer le state dans React.' },
    { id: 3, title: 'Article 3', summary: 'Résumé de l\'article 3. Comprendre les Hooks dans React.' },
    { id: 4, title: 'Article 4', summary: 'Résumé de l\'article 4. Introduction aux Contextes dans React.' },
    { id: 5, title: 'Article 5', summary: 'Résumé de l\'article 5. Optimisation des performances dans React applications.' },
    { id: 6, title: 'Article 6', summary: 'Résumé de l\'article 6. Stratégies de test pour les applications React.' },
    { id: 7, title: 'Article 7', summary: 'Résumé de l\'article 7. Utiliser Redux pour gérer l\'état global.' },
    { id: 8, title: 'Article 8', summary: 'Résumé de l\'article 8. React Router: Avancé techniques et astuces.' },
    { id: 9, title: 'Article 9', summary: 'Résumé de l\'article 9. Construire des formulaires dynamiques avec React.' },
    { id: 10, title: 'Article 10', summary: 'Résumé de l\'article 10. Introduction à GraphQL dans les applications React.' },
    { id: 11, title: 'Article 11', summary: 'Résumé de l\'article 11. Gérer les side-effects dans React avec useEffect.' },
    { id: 12, title: 'Article 12', summary: 'Résumé de l\'article 12. Créer une application e-commerce avec React.' },
    { id: 13, title: 'Article 13', summary: 'Résumé de l\'article 13. Sécurité dans les applications React.' },
    { id: 14, title: 'Article 14', summary: 'Résumé de l\'article 14. React et TypeScript: Meilleures pratiques.' },
    { id: 15, title: 'Article 15', summary: 'Résumé de l\'article 15. Construire des applications mobiles avec React Native.' },
    { id: 16, title: 'Article 16', summary: 'Résumé de l\'article 16. Server-side rendering avec React et Next.js.' },
    { id: 17, title: 'Article 17', summary: 'Résumé de l\'article 17. Déploiement et hosting d\'applications React.' },
    { id: 18, title: 'Article 18', summary: 'Résumé de l\'article 18. Introduction à l\'animation dans React applications.' },
    { id: 19, title: 'Article 19', summary: 'Résumé de l\'article 19. Gestion avancée des erreurs dans React applications.' },
    { id: 20, title: 'Article 20', summary: 'Résumé de l\'article 20. Utiliser Webpack pour optimiser vos applications React.' },
];

    ```

2. **Affichage des résultats de recherche :** Modifiez le composant `SearchResultsPage` pour afficher une liste des titres des articles. Pour simplifier, vous pouvez considérer que tous les articles correspondent au terme de recherche.

3. **Détails de l'article :** Créez un nouveau composant `ArticleDetailsPage` qui affiche le titre et le résumé d'un article. Utilisez `useParams` pour récupérer l'ID de l'article depuis l'URL.

4. **Navigation vers les détails de l'article :** Dans `SearchResultsPage`, rendez chaque titre d'article cliquable, de sorte qu'en cliquant sur un titre, l'utilisateur est redirigé vers la page de détails de l'article correspondant. Utilisez `useNavigate` ou le composant `Link` de `react-router-dom` pour gérer cette navigation.

5. **Configuration des routes :** Ajoutez une route dans `App.js` pour les détails de l'article, par exemple `/articles/:id`.

**Critères d'évaluation :**

- Fonctionnalité : L'application doit fonctionner comme décrit, permettant à l'utilisateur de voir une liste d'articles et de cliquer sur un article pour voir ses détails.
- Code : Le code doit être propre, bien organisé, et commenté si nécessaire.
- Utilisation de React Router : L'application doit utiliser correctement `Routes`, `Route`, `Link` ou `useNavigate`, et `useParams`.
