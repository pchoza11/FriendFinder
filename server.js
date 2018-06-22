
// Required Node Package Modules ==============================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var exportsHTML = require("./app/routing/htmlRoutes.js");
// var exportsAPI = require("./app/routing/apiRoutes.js");

// Port Variables ============================================================

var app = express();
var PORT = process.env.PORT || 3000;

// Routes ====================================================================

// require("./app/routing/htmlRoutes")(app);
// require("./app/routing/apiRoutes")(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.get("./app/public/style.css", function (req, res) {
//     res.sendfile(path.join(__dirname, "./app/public/style.css"));
// });

// app.get("/api/friends", function (req, res) {
//     return res.json(friends)
// });

app.listen(PORT, function () {
    console.log("app is listening");
});

