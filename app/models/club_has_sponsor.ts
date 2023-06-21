const { Model, DataTypes } = require("sequelize");
import getConnexion from "../db/sequelizeConnexion";

class ClubHasSponsor extends Model {
  public club_sponsor_id!: number;
  public sponsor_id!: number;
}

ClubHasSponsor.init(
  {
    club_sponsor_id: DataTypes.INTEGER,
    sponsor_id: DataTypes.INTEGER,
  },
  {
    sequelize: getConnexion(),
    tableName: "club_has_sponsor",
    modelName: "ClubHasSponsor",
  }
);

export default ClubHasSponsor;
