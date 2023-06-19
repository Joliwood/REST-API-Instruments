require("dotenv").config();
const express = require("express");
const router = require("./app/routers");

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL;

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://${BASE_URL}:${PORT}`);
});
