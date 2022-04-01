const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = __dirname + '/app/views/';

const app = express();
const db = require("./app/models");
//db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// }); if force:true db will drop and create verytime we start the node
db.sequelize.sync().then(() => {
  console.log("Db is running");
});
app.use(express.static(path));


var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});
require("./app/routes/tracker.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});