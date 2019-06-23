const router = require("express").Router();
const { Client } = require("../db/models");
module.exports = router;

router.get("/login", async (req, res, next) => {
  console.log("USERUSER:", req.user);
  try {
    const client = await Client.findOne({ where: { email: req.body.email } });
    if (!client) {
      console.log("No such user found:", req.body.email);
      res.status(401).send("Wrong username and/or password");
    } else if (!client.correctPassword(req.body.password)) {
      console.log("Incorrect password for user:", req.body.email);
      res.status(401).send("Wrong username and/or password");
    } else {
      req.session.userId = client.id;
      req.login(client, err => (err ? next(err) : res.json(client)));
    }
  } catch (err) {
    next(err);
  }
});

// router.post('/signup', async (req, res, next) => {
//   try {
//     const client = await Client.create(req.body)
//     const cart = await Order.create({})
//     await user.addOrder(cart)
//     req.session.cartId = cart.id
//     // req.session.userId = user.id
//     req.login(user, err => (err ? next(err) : res.json(user)))
//   } catch (err) {
//     if (err.name === 'SequelizeUniqueConstraintError') {
//       res.status(401).send('User already exists')
//     } else {
//       next(err)
//     }
//   }
// })

router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get("/me", (req, res) => {
  res.json(req.user);
});
