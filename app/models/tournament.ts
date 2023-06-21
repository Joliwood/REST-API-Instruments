import { Model, DataTypes } from "sequelize";
import getConnexion from "../db/sequelizeConnexion";

class Tournament extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public event_date!: Date;
  public sport_id!: number;
}

Tournament.init(
  {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    event_date: DataTypes.DATE,
    sport_id: DataTypes.INTEGER,
  },
  {
    sequelize: getConnexion(),
    tableName: "tournament",
    modelName: "Tournament",
  }
);

export default Tournament;
