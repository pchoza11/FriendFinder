var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
// var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var friends = require("../data/friends");


// app.get("/api/friends", function (req, res) {
//     return res.json(friends);
// }),

// app.post("/api/friends", function (req, res) {
//     friends.push(req.body);
// })


module.exports = function(app) {
    app.get('/api/friends', function(req, res){
        return res.json(friends);
    });
    app.get('/api/friends/:friends', function(req,res){
        var friends = req.params.friend;
        console.log(friend);
        for (var i = 0; i< friends.length; i++){
            console.log();
            res.json(friends[i]);
        }
        return res.json(false);
    });
    app.post('/api/friends', function (req, res){
        
        var newFriends = req.body;
        newFriends.rName = newFriends.name.replace(/\s+/g,"").toLowerCase();
        friends.push(newFriends);
        var userScore = newFriends.scores

        var diffArr = [];


        for (var i =0; i < friends.length-1; i++){
            var matcher = 0
            for (var j = 0; j < userScore.length; j++){
                matcher += Math.abs(friends[i].scores[j]-userScore[j])
            }
                diffArr.push(matcher)
        }
        var arbNum = diffArr[0];
        for ( var i = 0; i < diffArr.length; i++){
            if (diffArr[i] > arbNum){
                arbNum = diffArr[i]
            }

        }

        var match = diffArr.indexOf(arbNum);
        var matchName = friends[match].name;
        var photo = friends[match].photo;

        console.log(match)

        console.log(arbNum)
        console.log(diffArr)

        console.log("6"+newFriends);
        // friends.push(newFriends);
        res.send("7");

    })
}
