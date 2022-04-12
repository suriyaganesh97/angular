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
      },
      prioritytype:{
        type: Sequelize.STRING
      },
      worktype:{
        type: Sequelize.STRING
      },
	
	    membername:{
        type: Sequelize.STRING
      },
	    bankname:{
        type: Sequelize.STRING
      },
	    regionbank:{
        type: Sequelize.STRING
      },
	    solution:{
        type: Sequelize.STRING
      },
	    comment:{
        type: Sequelize.STRING
      }
    });
    return Tracker;
  };