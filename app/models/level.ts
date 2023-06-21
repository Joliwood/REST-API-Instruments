import { Model, DataTypes } from "sequelize";
import getConnexion from "../db/sequelizeConnexion";

class Level extends Model {
  public id!: number;
  public name!: string;
}

Level.init(
  {
    name: DataTypes.TEXT,
  },
  {
    sequelize: getConnexion(),
    tableName: "level",
    modelName: "Level",
  }
);

export default Level;
