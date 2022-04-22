module.exports = app => {
    const trackers = require("../controllers/tracker.controller.js");
    var router = require("express").Router();
    const excelController = require("../controllers/excel.controller");
    // Create a new Tracker
    router.post("/", trackers.create);
    // Retrieve all Tracker
    router.get("/", trackers.findAll);
    // Retrieve all published Tracker
    router.get("/published", trackers.findAllPublished);
    //retrieve with filter priority
    router.get("/filterwithpriority", trackers.findAllByPriorityFilter);
    //retrieve with  filter solution
    router.get("/filterwithsolution", trackers.findAllBySolutionFilter);
    // Retrieve a single Tracker with id
    router.get("/:id", trackers.findOne);
    // Update a Tracker with id
    router.put("/:id", trackers.update);
    // Delete a Tracker with id
    router.delete("/:id", trackers.delete);
    // Delete all Trackers
    router.delete("/", trackers.deleteAll);
    //excel download
    // router.get("/download", excelController.download);
    // app.use("/api/excel", router);
   

    app.use('/api/tracker', router);
  };