const path = require("path");
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express();
const PORT = 8080;
// const server = require("http").createServer.listen(3000);
const socketio = require("socket.io");
// const io = require("socket.io")(server);
const { Client } = require("./db/models/client");
db.sync({ logging: false, force: true });
const mobileSockets = {};
module.exports = app;

const createApp = () => {
  app.use(morgan("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", require("./api"));

  // app.use((req, res, next) => {
  //   if (this.path.extname(req.path).length) {
  //     const err = new Error("Not found");
  //     err.status = 404;
  //     next(err);
  //   } else {
  //     next();
  //   }
  // });
};

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );

  // set up our socket control center
  // const io = socketio(server);
  // require("./socket")(io);
};

const syncDb = () => db.sync();

async function bootApp() {
  await syncDb();
  await createApp();
  await startListening();
}

bootApp();

// if (require.main === module) {
//   bootApp();
// } else {
//   createApp();
// }
