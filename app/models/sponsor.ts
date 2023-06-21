import { Model, DataTypes } from "sequelize";
import getConnexion from "../db/sequelizeConnexion";

class Sponsor extends Model {
  public id!: number;
  public name!: string;
  public slogan!: string;
}

Sponsor.init(
  {
    name: DataTypes.TEXT,
    slogan: DataTypes.TEXT,
  },
  {
    sequelize: getConnexion(),
    tableName: "sponsor",
    modelName: "Sponsor",
  }
);

export default Sponsor;
