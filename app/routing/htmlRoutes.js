
// Required Node Package Modules ==============================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Port connection Variables ==================================================

var app = express.Router();
var PORT = process.env.PORT || 3000;

// Routes =====================================================================

module.exports = function(app){
    app.get("../public/style.css", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/style.css"));
    }),

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    }),

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

};