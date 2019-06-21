const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const Client = db.define("client", {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue("password");
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue("salt");
    }
  },
  image: {
    type: Sequelize.STRING // ???
  },
  phoneNumber: {
    type: Sequelize.BIGINT
  },
  weight: {
    type: Sequelize.FLOAT
  },
  age: {
    type: Sequelize.INTEGER
  },
  bodyFat: {
    type: Sequelize.INTEGER
  }
});

module.exports = Client;

/**
 * instanceMethods
 */
Client.prototype.correctPassword = function(candidatePwd) {
  return Client.encryptPassword(candidatePwd, this.salt()) === this.password();
};

/**
 * classMethods
 */
Client.generateSalt = function() {
  return crypto.randomBytes(16).toString("base64");
};

Client.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
    .digest("hex");
};

/**
 * hooks
 */
const setSaltAndPassword = client => {
  if (client.changed("password")) {
    client.salt = Client.generateSalt();
    client.password = Client.encryptPassword(client.password(), client.salt());
  }
};

Client.beforeCreate(setSaltAndPassword);
Client.beforeUpdate(setSaltAndPassword);
Client.beforeBulkCreate(clients => {
  clients.forEach(setSaltAndPassword);
});
