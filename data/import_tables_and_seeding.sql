--
-- Base de données :  "okanbanwatt"
--

-- Note : BEGIN déclare le début d'une transaction : un groupe d'instructions SQL qui rend celles-ci dépendantes les unes des autres. 
-- Si au moins une des instructions génère une erreur, alors toutes les commandes sont invalidées.
BEGIN;

--
-- SUPPRIMER LES TABLES A CREER SI ELLES EXISTENT DEJA
--
DROP TABLE IF EXISTS "list",
"card",
"tag",
"card_has_tag";


CREATE TABLE IF NOT EXISTS "list" (
  "id" integer NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY, -- GENERATED ALWAYS AS IDENTITY permet de laisser le SGBD gérer la valeur pour ce champs
  "name" varchar(100) NOT NULL,
  "position" smallint NOT NULL DEFAULT 0,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE "card" (
  "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "list_id" INTEGER NOT NULL REFERENCES "list"("id") ON DELETE CASCADE, -- si la liste 12 est supprimée alors, tous les enregistrements de la table carte avec la valeur 12 pour le champ list_id sont automatiquement supprimés. en savoir plus : https://www.postgresql.org/docs/current/ddl-constraints.html
  "title" varchar(100) NOT NULL,
  "color" VARCHAR(50),
  "position" SMALLINT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "tag" (
 "id" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 "name" VARCHAR(50) NOT NULL,
 "color" VARCHAR(50),
 "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
 "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card_has_tag" (
  "tag_id" INTEGER NOT NULL REFERENCES "tag"("id") ON DELETE CASCADE,
  "card_id" INTEGER NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE ("tag_id", "card_id") -- on aurait aussi pu faire PRIARY KEY ("tag_id", "card_id")
);

-- Pour mettre fin à au bloc de transaction et l'exécuter
COMMIT;



--
-- SEEDING : CREATION D'UN JEU DE DONNES DE BASE POUR NOTRE BDD
--
BEGIN;

-- LIST
INSERT INTO "list" ("name", "position")
VALUES ('première liste', 1);

INSERT INTO "list" ("name", "position")
VALUES ('deuxième liste', 2);

-- INSERT INTO "list" ("name", "position")
-- VALUES ("première liste", 1), ("deuxième liste", 2);

-- CARD
INSERT INTO "card" ("title", "color", "position", "list_id")
VALUES ('carte 1', '#000000', 1, 1), 
('carte 2', '#FF0000', 2, 1), 
('carte 3', '#00FF00', 3, 1),
('carte 4', '#FF0000', 1, 2), 
('carte 5', '#00FF00', 2, 2);


-- TAG
INSERT INTO "tag" ("name", "color")
VALUES ('urgent', '#6b2cb2'),
('non prioritaire', '#0ac3a7'),
('moyennement prioritaire', '#234b78');


-- CARD_HAS_TAG
INSERT INTO "card_has_tag" ("card_id", "tag_id")
VALUES (1, 1),
(1, 2),
(2, 3),
(3, 3);

COMMIT;