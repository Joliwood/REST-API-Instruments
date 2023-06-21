import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const pgUrl = process.env.PG_URL as string;

function getConnexion(): Sequelize {
  const sek = new Sequelize(pgUrl, {
    dialect: "postgres",
    define: {
      underscored: true,
    },
    logging: false,
  });

  return sek;
}

export default getConnexion;
