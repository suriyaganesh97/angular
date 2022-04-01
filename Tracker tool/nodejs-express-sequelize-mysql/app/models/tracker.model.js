module.exports = (sequelize, Sequelize) => {
    const Tracker = sequelize.define("tracker", {
      username: {
        type: Sequelize.STRING
      },
      userdescription: {
        type: Sequelize.STRING
      },
      userpublished: {
        type: Sequelize.BOOLEAN
      }
    });
    return Tracker;
  };