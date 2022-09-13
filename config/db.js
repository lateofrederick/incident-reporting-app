const { Sequelize, DataTypes, Model } = require("sequelize");

const userName = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

function init() {
  const sequelize = new Sequelize(database, userName, password, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.reports = require("../models/report")(sequelize);

  return db;
}

module.exports = {
  init,
};
