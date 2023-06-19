const { List } = require("../models");

const listController = {
  getAll: async (req, res) => {
    try {
      const lists = await List.findAll({
        include: ["cardsFromList"],
        order: [["position", "ASC"]],
      });

      return res.json(lists);
    } catch (error) {
      return res.status(500).json({ message: "Unexpected server error" });
    }
  },

  getOne: async (req, res) => {
    try {
      // On recup l'id passé en param
      const listId = parseInt(req.params.id, 10);
      // const listId = Number(req.params.id);

      // On passe par le model pour recup la list
      const list = await List.findByPk(listId, {
        include: ["cardsFromList"],
      });

      // Si on ne trouve pas la list => 404 Not Found
      if (!list) {
        return res
          .status(404)
          .json({ message: "List not found. Please verify the provided id" });
      }

      // Si on trouve, on la retourne en JSON
      return res.json(list);
    } catch (error) {
      res.status(500).json({ message: "Unexpected server error" });
    }
  },

  create: async (req, res) => {
    try {
      // On peut recup des données d'une requête POST avec req;body
      // Possible grace au mw de body-parsing

      //! 1. Validation des données
      // Avant de venir insérer des données dans la DB, on va quand même vérifier qu'elles sont conformes
      if (!req.body.name) {
        return res
          .status(400)
          .json({ message: "Missing body parameter : name" });
      }
      if (typeof req.body.name !== "string") {
        return res
          .status(400)
          .json({ message: "Invalid type: name should be a string" });
      }
      if (req.body.position !== undefined && isNaN(req.body.position)) {
        return res
          .status(400)
          .json({ message: "Invalid type: position should be a number" });
      }

      //! 2. Création de la ressource
      // Une fois toutes les verifs passées, on peut créer notre nouvelle liste
      // avec les infos reçu du client
      const newList = await List.create({
        name: req.body.name,
        position: req.body.position,
      });

      //! 3. Retour au client
      // On retourne la liste fraichement créer notamment avec son id (généré automatiquement par le SGBD)
      // Le code HTTP pour une création est : 201 Created
      return res.status(201).json(newList);
    } catch (error) {
      res.status(500).json({ message: "Unexpected server error" });
    }
  },

  update: async (req, res) => {
    try {
      // On recup l'id de la liste à MaJ
      const listId = Number(req.params.id);

      //! 1. Validation des données
      // On verif que la liste existe bien en DB
      const foundList = await List.findByPk(listId);
      // Si la liste demandée d'existe pas => 404 NotFound
      if (!foundList) {
        return res
          .status(404)
          .json({ message: "List not found. Please verify the provided id" });
      }
      // On verif que le name soit bien rensiegné et de type string
      if (
        typeof req.body.name !== "undefined" &&
        typeof req.body.name !== "string"
      ) {
        return res.status(400).json({
          message: "Invalid body parameter 'name'. Should provide a string.",
        });
      }
      // On verif que position soit bien rensiegnée et soit de type number
      if (req.body.position !== undefined && isNaN(req.body.position)) {
        return res.status(400).json({
          message:
            "Invalid body parameter 'position'. Should provide a number.",
        });
      }

      //! 2. MaJ de la ressource
      await foundList.update({
        name: req.body.name,
        position: Number(req.body.position),
      });

      //! 3. Retour au client
      return res.json(foundList);
    } catch (error) {
      res.status(500).json({ message: "Unexpected server error" });
    }
  },

  delete: async (req, res) => {
    try {
      // On recup l'id de la liste à MaJ
      const listId = Number(req.params.id);

      //! 1. Delete de la ressource + verif
      const suppressedList = await List.destroy({
        where: {
          id: listId,
        },
      });

      // La méthode destroy nous renvois le nb de lignes suppr depuis la DB
      // Si elle renvoie 0, c'est qu'elle n'a pas trouvée la liste à delete ! => 404
      if (suppressedList === 0) {
        return res
          .status(404)
          .json({ message: "List not found. Please verify the provided id" });
      }

      //! 2. Retour au client
      //* Ici pon fait attentioon à utliser la méthode sendStatus pour définir le code HTTP et terminer la réponse
      //* sinon ça mouline dans le vide, car aucune réponse n'est envoyée !
      return res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: "Unexpected server error" });
    }
  },
};

module.exports = listController;
