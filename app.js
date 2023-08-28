require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

const db = process.env.dbURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3003);
    console.log("connected to database");
  })
  .catch((error) => console.log(error));
app.use(express.json());
app.use(blogRoutes);
app.get("/");

app.use(morgan("tiny"));
