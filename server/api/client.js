const router = require("express").Router();
const { Client } = require("../db/models/");
module.exports = router;

router.get("/", async (req, res, next) => {
  console.log("i am herererere");
  try {
    const clients = await Client.findAll();
    console.log("BOOGIE BOOGIE:", clients);
    res.json(clients);
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res, next) => {
  console.log("I am getting a single user");
  try {
    const client = await Client.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    });
    if (!client) {
      console.log("No such user found:", req.body.email);
      res.status(401).send("Wrong username and/or password");
      res.status(401).send("Wrong username and/or password");
    } else if (!URLSearchParams.correctPassword(req.body.password)) {
      console.log("Incorrect password for user:", req.body.email);
      res.status(401).send("Wrong username and/or password");
    }
    console.log(client);
    req.login(user, err => (err ? next(err) : res.json(user)));
  } catch (error) {
    console.log(error);
  }
});

router.get("/me", (req, res) => {
  res.json(req.user);
});
