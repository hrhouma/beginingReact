# 1 - Utilisation de `useMemo` dans React

## Introduction à `useMemo`

`useMemo` est un hook inclus dans la bibliothèque React qui permet de mémoriser des valeurs calculées coûteuses. L'objectif de `useMemo` est d'optimiser les performances des rendus de composants en évitant des recalculs inutiles. Ce hook est particulièrement utile dans les situations où les calculs dépendent de certaines propriétés (props) ou états (states) et sont coûteux en termes de performance.

## Quand utiliser `useMemo`

Vous devriez envisager d'utiliser `useMemo` dans les scénarios suivants:

1. **Calculs Coûteux**: Lorsqu'un composant effectue des calculs lourds qui ne doivent pas être exécutés à chaque rendu, `useMemo` peut mémoriser le résultat tant que ses dépendances ne changent pas.
2. **Références Constantes**: Pour les objets complexes qui sont passés en props à des composants enfants et qui ne doivent pas changer à chaque rendu, afin d'éviter des rendus inutiles de ces enfants.
3. **Optimisation de Performance**: Dans des composants qui se rendent fréquemment et utilisent des données dérivées de props ou state qui changent rarement.

## Exemple de Code

Dans l'exemple suivant, nous utilisons `useMemo` pour calculer la somme des éléments d'un tableau, ce qui est une opération coûteuse si le tableau est grand. Le calcul ne sera réexécuté que si le tableau change, ce qui est contrôlé par la liste de dépendances de `useMemo`.

```javascript
import React, { useMemo } from 'react';

function SumArray({ numbers }) {
  const sum = useMemo(() => {
    console.log('Calculating sum of the array...');
    return numbers.reduce((total, num) => total + num, 0);
  }, [numbers]);

  return <div>La somme est: {sum}</div>;
}

export default SumArray;
```

### Explication

- **`numbers`** : Un tableau de nombres passé en props.
- **`useMemo(() => {...}, [numbers])`** : Le hook `useMemo` est utilisé ici pour mémoriser le calcul de la somme du tableau. La fonction de calcul ne sera exécutée que si le tableau `numbers` change, car `[numbers]` est passé comme seconde argument indiquant les dépendances de la mémorisation.

## Conclusion

- Utiliser `useMemo` permet de réduire le coût de rendu des composants en réutilisant des valeurs mémorisées plutôt que de les recalculer à chaque rendu.
- Cela peut significativement améliorer la performance des applications, en particulier celles qui gèrent de grandes quantités de données ou qui ont des calculs complexes dans leurs composants.
- Ce document offre une introduction concise mais complète à l'utilisation de `useMemo`, expliquant clairement quand et comment l'utiliser pour optimiser les applications React.

# 2 - Exemple plus simple : 

- Je vais vous présenter un exemple plus simple et plus illustratif utilisant `useMemo` dans un contexte React pour bien comprendre son utilité.

### Contexte de l'Exemple
- Imaginons que nous ayons un composant qui affiche un nombre aléatoire entre 0 et une limite spécifiée par l'utilisateur.
- Cependant, nous ne voulons pas recalculer ce nombre aléatoire chaque fois que le composant se rend, sauf si l'utilisateur change la limite.

### Exemple de Code

```javascript
import React, { useState, useMemo } from 'react';

function RandomNumberGenerator() {
  const [limit, setLimit] = useState(100); // Limite initiale pour le nombre aléatoire
  const randomNumber = useMemo(() => {
    console.log('Calculating random number...');
    return Math.floor(Math.random() * limit);
  }, [limit]);

  return (
    <div>
      <h1>Nombre Aléatoire: {randomNumber}</h1>
      <input
        type="number"
        value={limit}
        onChange={e => setLimit(Number(e.target.value))}
      />
    </div>
  );
}

export default RandomNumberGenerator;
```

### Détails de l'Exemple

1. **useState** : Utilisé pour stocker la limite (`limit`) du nombre aléatoire. Cette limite peut être modifiée par l'utilisateur via un champ de saisie (`input`).

2. **useMemo** :
   - **Fonction de calcul** : `() => Math.floor(Math.random() * limit)`
     - Cette fonction génère un nombre aléatoire entre 0 et la limite. `Math.random()` génère un nombre flottant entre 0 et 1, que nous multiplions par la `limit` et arrondissons vers le bas pour obtenir un entier.
   - **Dépendances** : `[limit]`
     - Le nombre aléatoire n'est recalculé que lorsque la `limit` change. Cela signifie que si le composant se rend à nouveau mais que `limit` reste inchangée, le nombre aléatoire mémorisé est réutilisé.

3. **Comportement Attendu** :
   - Chaque fois que l'utilisateur modifie la valeur dans le champ de saisie, la dépendance (`limit`) de `useMemo` change, déclenchant un recalcul du nombre aléatoire.
   - Si d'autres parties du composant se rendent mais que `limit` ne change pas, le nombre aléatoire mémorisé est utilisé, ce qui évite un recalcul inutile et améliore les performances du composant.

Cet exemple illustre bien comment `useMemo` peut être utilisé pour éviter des calculs coûteux lors de rendus inutiles, en conservant la valeur calculée tant que ses dépendances ne changent pas.
