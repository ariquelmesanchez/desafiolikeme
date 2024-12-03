const express = require("express");
const routes = require("./routes/routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/", routes);
app.use((req, res, next) => {
    res.status(404).json({ msg: "Ruta no encontrada" });
  });

module.exports = app;