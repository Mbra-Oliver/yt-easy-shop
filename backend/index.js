const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

const MONGODBURI = null;
const app = express();

app.use(bodyParser());
app.use(cors());

//Routes

app.use("/auth", authRoutes);

//Retourner les erreurs

app.use((err, req, res, next) => {
  console.log(err);
  const status = err.statusCode || 500;
  const message = err.message;
  const data = err.data;
  res.json({
    message,
    data,
    statusCode: status,
  });
});

//Connexion a la BD mongoDB

mongoose
  .connect(MONGODBURI)
  .then((result) => {
    console.log("connected");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
