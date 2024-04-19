const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

const User = require("./user.model")(sequelize, Sequelize);
const Room = require("./room.model")(sequelize, Sequelize);
const Round = require("./round.model")(sequelize, Sequelize);
const Answer = require("./answer.model")(sequelize, Sequelize);

Room.hasMany(User, { as: "users" });
User.belongsTo(Room, { foreignKey: "roomId", as: "room" });

Room.hasMany(Round, { as: "rounds" });
Round.belongsTo(Room, { foreignKey: "roomId", as: "room" });

Round.hasMany(Answer, { as: "answers" });
Answer.belongsTo(Round, { foreignKey: "roundId", as: "round" });

db.rooms = Room;
db.users = User;
db.rounds = Round;
db.answers = Answer;

module.exports = db;
