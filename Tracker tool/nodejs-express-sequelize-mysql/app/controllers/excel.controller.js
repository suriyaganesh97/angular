const db = require("../models");
const Tracker = db.trackers;
const excel = require("exceljs");
const download = (req, res) => {
    Tracker.findAll().then((objs) => {
    let trackers = [];
    objs.forEach((obj) => {
        trackers.push({
        id: obj.id,
        username: obj.username,
        userdescription: obj.userdescription,
        userpublished: obj.userpublished,
      });
    });
    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("trackers");
    worksheet.columns = [
      { header: "Id", key: "id", width: 5 },
      { header: "Title", key: "username", width: 25 },
      { header: "Description", key: "userdescription", width: 25 },
      { header: "Published", key: "userpublished", width: 10 },
    ];
    // Add Array Rows
    worksheet.addRows(trackers);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "trackers.xlsx"
    );
    return workbook.xlsx.write(res).then(function () {
      res.status(200).end();
    });
  });
};
module.exports = {
  download,
};