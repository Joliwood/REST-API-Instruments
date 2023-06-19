const List = require("./List");
const Card = require("./Card");
const Tag = require("./Tag");

List.hasMany(Card, {
  as: "cardsFromList",
  foreignKey: "list_id",
});

Card.belongsTo(List, {
  as: "list",
  foreignKey: "list_id",
});

Card.belongsToMany(Tag, {
  through: "card_has_tag",
  foreignKey: "card_id",
  otherKey: "tag_id",
  as: "tags",
  timestamps: true,
  updatedAt: false,
});

Tag.belongsToMany(Card, {
  through: "card_has_tag",
  foreignKey: "tag_id",
  otherKey: "card_id",
  as: "cardsFromTag",
  timestamps: true,
  updatedAt: false,
});

module.exports = {
  List,
  Card,
  Tag,
};
