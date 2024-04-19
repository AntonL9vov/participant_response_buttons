module.exports = (sequelize, Sequelize) => {
  const Round = sequelize.define("round", {
    name: {
      type: Sequelize.STRING,
    },
    finished: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Round;
};
