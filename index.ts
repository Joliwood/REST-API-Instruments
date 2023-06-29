import dotenv from "dotenv";
import express, { Express } from "express";
import router from "./app/routers";
import cors from "cors";
dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 3000;
const BASE_URL: string = process.env.BASE_URL || "localhost";

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://${BASE_URL}:${PORT}`);
});
