const { Tournament } = require("../models");

const tournamentController = {
  async getAll(req, res) {
    const id = req.params.id;
    try {
      const tournament = await Tournament.findAll({
        include: { all: true, nested: true },
      });

      res.json(tournament);
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = tournamentController;
