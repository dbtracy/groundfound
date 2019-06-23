const path = require("path");
const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const sessionStore = new SequelizeStore({ db });
const app = express();
const passport = require("passport");
const PORT = 8080;
// const server = require("http").createServer.listen(3000);
const socketio = require("socket.io");
// const io = require("socket.io")(server);
const { Client } = require("./db/models/client");
db.sync({ logging: false, force: true });
const mobileSockets = {};
module.exports = app;

//passport registration
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

const createApp = () => {
  app.use(morgan("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    session({
      secret: "hooky vanilla",
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

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
