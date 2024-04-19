module.exports = (sequelize, Sequelize) => {
  const Answer = sequelize.define("answer", {
    userId: {
      type: Sequelize.INTEGER,
    },
  });

  return Answer;
};
