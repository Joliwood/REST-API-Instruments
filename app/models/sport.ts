import { Model, DataTypes } from "sequelize";
import getConnexion from "../db/sequelizeConnexion";

class Sport extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public picture!: string;
}

Sport.init(
  {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    picture: DataTypes.TEXT,
  },
  {
    sequelize: getConnexion(),
    tableName: "sport",
    modelName: "Sport",
  }
);

export default Sport;
