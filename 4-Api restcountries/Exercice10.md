# Exercice formulaire avec REACT et Semantic UI

# Étape 1 : Choix de la langue

**Objectif :** Développer la première partie de l'interface utilisateur qui permet aux utilisateurs de choisir une langue (français ou anglais) et préparer l'affichage d'une liste de pays où la langue sélectionnée est parlée, en utilisant l'API REST Countries.

**Instructions :**

1. **Conception de l'interface :**
   - Utilisez Semantic UI pour créer un composant `Select` qui permet à l'utilisateur de choisir entre "Français" et "Anglais". Ce `Select` sera le seul élément visible initialement.
   - Ajoutez un deuxième composant `Select`, initialement caché, qui sera utilisé pour afficher les pays correspondant à la langue choisie.

2. **Appel API :**
   - Utilisez l'endpoint suivant de l'API REST Countries pour récupérer les pays : `https://restcountries.com/v3.1/lang/{language}`. Remplacez `{language}` par `fra` pour le français ou `eng` pour l'anglais, en fonction du choix de l'utilisateur.
   - Traitez la réponse de l'API pour extraire les noms des pays et les insérer dans le deuxième `Select`.

3. **Interaction et mise à jour dynamique :**
   - Configurez le premier `Select` pour que, lorsqu'une langue est choisie, le deuxième `Select` se mette à jour automatiquement avec la liste des pays et devienne visible.

**Critères de réussite :**
- L'interface utilise les composants de Semantic UI pour une intégration visuelle cohérente.
- Les interactions entre les composants `Select` fonctionnent correctement sans erreurs.
- Les appels API sont correctement effectués et les résultats attendus sont affichés correctement.

# Étape 2 : Sélection du pays

**Objectif :** Afficher un troisième `Select` avec la liste des pays parlant la langue choisie.

**Instructions :**
- Configurez le deuxième `Select` pour qu'il affiche les pays une fois que la langue a été choisie.
- Assurez-vous que la sélection d'un pays dans le deuxième `Select` active l'affichage d'un troisième `Select` pour la sélection des pays voisins.

# Étape 3 : Sélection du pays voisin

**Objectif :** Créer un troisième `Select` pour choisir parmi les pays voisins du pays sélectionné précédemment.

**Instructions :**
- Utilisez l'endpoint de l'API REST Countries pour récupérer les voisins du pays sélectionné.
- Le troisième `Select` ne doit apparaître que lorsque le pays a été sélectionné dans le deuxième `Select`.

# Étape 4 : Affichage des informations du pays

**Objectif :** Afficher les informations détaillées du pays et de ses voisins après la sélection dans le troisième `Select`.

**Instructions :**
- Affichez des informations telles que le drapeau, la liste des langues parlées, et des données démographiques.
- Cette vue ne s'affiche que lorsque le voisin est sélectionné dans le troisième `Select`.

# Résumé et schéma 

## Architecture de l'interface

```
+-------------------+   +--------------------------------+
|   Select Langue   |   |   Sélectionnez une langue :    |
+-------------------+   +--------------------------------+
          |                      ↓
          |              +-------------------+
          +------------> |   Français        |
                         |   Anglais         |
                         +-------------------+
                                 |
                                 |
                     +-----------+-----------+
                     |                       |
          +-------------------+   +-------------------+
          |   Select Pays     |   |   Liste de Pays   |
          +-------------------+   +-------------------+
                     |                       |
                     |                       ↓
                     |            +-------------------+
                     |            | Pays sélectionné  |
                     +----------> +-------------------+
                                  |                   |
                                  +---------+---------+
                                            |
                                +-----------+-----------+
                                |                       |
                     +-------------------+   +-------------------+
                     |  Select Voisins   |   |   Liste Voisins   |
                     +-------------------+   +-------------------+
                                |                       |
                                |                       ↓
                                |            +-------------------+
                                |            | Voisin sélectionné|
                                +----------> +-------------------+
                                             |                   |
                                             +-------------------+
```

## Description

1. **Select Langue** : L'utilisateur commence par sélectionner la langue (Français ou Anglais) dans un menu déroulant.
2. **Select Pays** : Après la sélection de la langue, un nouveau menu déroulant apparaît permettant de choisir parmi les pays qui parlent la langue sélectionnée.
3. **Select Voisins** : Une fois un pays sélectionné, un dernier menu déroulant permet de choisir parmi ses pays voisins.
4. **Affichage des informations** : Après la sélection du voisin, les informations détaillées du pays sont affichées.
