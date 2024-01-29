const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {});

const MONGO_DB_URL =
  "mongodb+srv://mbraoliver-dev:B6tL426reOCfZ1DU@cluster0.9rml5vv.mongodb.net/tutoriel_api";

app.use(bodyParser());
app.use(cors()); //Eviter les erreurs CORS

mongoose
  .connect(MONGO_DB_URL)
  .then((result) => {
    console.log("Nous sommes connecté");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
