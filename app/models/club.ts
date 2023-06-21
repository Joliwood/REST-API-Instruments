import { Model, DataTypes } from "sequelize";
import getConnexion from "../db/sequelizeConnexion";

class Club extends Model {
  public id!: number;
  public name!: string;
  public country!: string;
  public level_id!: number;
}

Club.init(
  {
    name: DataTypes.TEXT,
    country: DataTypes.TEXT,
    level_id: DataTypes.INTEGER,
  },

  {
    sequelize: getConnexion(),
    tableName: "club",
    modelName: "Club",
  }
);

export default Club;
