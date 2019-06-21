const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();
module.exports = app;

const createApp = () => {
  app.use(morgan("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", require("./api"));

  app.use((req, res, next) => {
    if (this.path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });
};

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const syncDb = () => db.sync();
