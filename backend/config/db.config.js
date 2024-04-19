require("dotenv").config();

const config = {
  HOST: process.env.DB_HOST ?? "localhost",
  USER: process.env.DB_USER ?? "postgres",
  PASSWORD: process.env.DB_PASSWORD ?? "postgres",
  DB: process.env.DB_NAME ?? "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = config;
