module.exports = app => {
    const trackers = require("../controllers/tracker.controller.js");
    var router = require("express").Router();
    const excelController = require("../controllers/excel.controller");
    // Create a new Tutorial
    router.post("/", trackers.create);
    // Retrieve all Tutorials
    router.get("/", trackers.findAll);
    // Retrieve all published Tutorials
    router.get("/published", trackers.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", trackers.findOne);
    // Update a Tutorial with id
    router.put("/:id", trackers.update);
    // Delete a Tutorial with id
    router.delete("/:id", trackers.delete);
    // Delete all Tutorials
    router.delete("/", trackers.deleteAll);
    //excel download
    // router.get("/download", excelController.download);
    // app.use("/api/excel", router);
   

    app.use('/api/tracker', router);
  };