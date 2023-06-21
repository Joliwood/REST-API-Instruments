import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const pgUrl = process.env.PG_URL as string;

function getConnexion(): Sequelize {
  const sequelize = new Sequelize(pgUrl, {
    dialect: "postgres",
    define: {
      underscored: true,
    },
    logging: false,
  });

  return sequelize;
}

export default getConnexion;
