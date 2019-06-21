const router = require("express").Router();
const { Client } = require("../db/models/");
module.exports = router;

router.get("/", async (req, res, next) => {
  console.log("i am herererere");
  try {
    const clients = await Client.findAll();
    console.log(clients);
    res.json(clients);
  } catch (error) {
    console.log(error);
  }
});
