"use strict";

const db = require("../server/db");
const { Client } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const clients = await Promise.all([
    Client.create({
      firstName: "Cody",
      lastName: "Garfleschnitzen",
      email: "cody@email.com",
      password: "123",
      image: "picture",
      phoneNumber: "1234567890",
      weight: 160.5,
      age: 30,
      bodyFat: 15
    }),
    Client.create({
      firstName: "Murphy",
      lastName: "Banniflonokkuses",
      email: "murphy@email.com",
      password: "123",
      image: "picture",
      phoneNumber: "2345678901",
      weight: 183.2,
      age: 50,
      bodyFat: 22
    })
  ]);
  console.log(`seeded ${clients.length} clients`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
