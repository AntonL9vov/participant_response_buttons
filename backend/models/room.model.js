module.exports = (sequelize, Sequelize) => {
  const Room = sequelize.define("room", {
    name: {
      type: Sequelize.STRING,
    },
  });

  return Room;
};
