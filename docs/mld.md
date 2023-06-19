# MLD

## Rappels

### Règle n°1

Toute entité du MCD devient une table du MLD. Les propriétés de ces entités deviennent les colonnes des tables. Le discriminant de l’entité devient une colonne comme les autres, simplement assortie d’une contrainte d’unicité. (La clé primaire de la table sera un id auto-généré par le SGBD)

### Règle n°2

Si l’une des cardinalités max vaut 1, une clé étrangère est créée du côté de l’entité où se trouve le 1. Cette clé étrangère fera référence à l’identifiant dans la table associée.

### Règle n°3

Si les deux cardinalités max sont N, donc une relation « plusieurs à plusieurs », la relation devient une table à part entière en relation avec les deux entités. On parle de table de liaison, d’association, de jonction ou de correspondance. Cette table de liaison contient 2 clefs étrangères vers les 2 tables à lier.

## Transformation

On part du MCD suivant et on le transforme en Modèle Logique de Données :

```sql
list (
  id INTEGER NOT NULL (PK),
  name TEXT NOT NULL,
  position UNSIGNED SMALLINT NOT NULL DEFAULT 0,
)

card (
  id INTERGER NOT NULL (PK),
  title TEXT NOT NULL,
  color VARCHAR(50),
  position UNSIGNED SMALLINT NOT NULL DEFAULT 0,
  list_id INTERGER NOT NULL (FK REFERENCES list(id))
)

tag (
  id INTERGER NOT NULL (PK),
  name TEXT NOT NULL,
  color VARCHAR(50),
)

card_has_tag (
  card_id INTERGER NOT NULL (FK REFERENCES card(id))
  tag_id INTERGER NOT NULL (FK REFERENCES tag(id))
)
```
