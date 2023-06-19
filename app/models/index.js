const Tournament = require("./tournament");
const Sponsor = require("./sponsor");
const Sport = require("./sport");
const Club = require("./club");
const Level = require("./level");

// Sequelize:
// 0,1 = hasOne
// 1,1 = belongsTo
// 0,n = hasMany
// n,n = belongsToMany

// On va chercher en foreignKey la clé qui lie les deux, donc ici le même level_id qui se trouve dans "club", par contre on va quand même chercher avec "as" dans quel model on va chercher, donc la cible de la liaison
Level.hasMany(Club, {
  foreignKey: "level_id",
  as: "club",
});

Club.belongsTo(Level, {
  foreignKey: "level_id",
  as: "level",
});

Sponsor.belongsToMany(Club, {
  foreignKey: "sponsor_id",
  as: "club",
  through: "club_has_sponsor",
  otherKey: "club_sponsor_id",
});

// Ici dans le MCD on est en 0,N MAIS on passe par un tableau d'association donc on prendra belongsToMany
Club.belongsToMany(Sponsor, {
  foreignKey: "club_sponsor_id",
  as: "sponsor",
  through: "club_has_sponsor",
  otherKey: "sponsor_id",
});

Tournament.belongsToMany(Club, {
  foreignKey: "tournament_id",
  as: "club",
  through: "tournament_has_club",
  otherKey: "club_id",
});

Club.belongsToMany(Tournament, {
  foreignKey: "club_id",
  as: "tournament",
  through: "tournament_has_club",
  otherKey: "tournament_id",
});

Tournament.belongsTo(Sport, {
  foreignKey: "sport_id",
  as: "sport",
});

Sport.hasMany(Tournament, {
  foreignKey: "sport_id",
  as: "tournament",
});

module.exports = {
  Tournament,
  Sponsor,
  Sport,
  Club,
  Level,
};
