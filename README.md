# Examen chapitre #2
## Convertisseur de nbr décimaux en nbr romains (1 -> 3999)

- Mettre en place le html (input/btn/outpout) _Check_
- Forcer l'entrée d'un nombre _Check_
- L'input doit être >= 1 && =< 3999 _Check_
- Imposer le nombre entier
- Retourner le resultat convertit en lettres _Check_

### Piste de réflexion

- Rentrer les cas particuliers dans un tableau. Leur valeur décimale et leur equivalent romain.

- Incrémenter de "I" quand le cas n'est pas présent dans le tableau, jusqu'a rencontrer un cas particulier.

- Boucler sur le tableau jusqu'a trouver une correspondance
    * ex : Si input = 3
        - 3 se situe entre 4 et 1 (d'après les valeurs romaines rentrées)
        - Si 4 > 3 alors prendre la valeur 1, l'ajoutée a la variable resultat et recommencer la boucle jusqu'a avoir 1+1+1 (=3)
