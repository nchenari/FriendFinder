// ======================================================================
// Survey should have 10 questions of your choosing. Each 
// ...answer should be on a scale of 1 to 5 based on how much the user
// ...agrees or disagrees with a question.
// ======================================================================
var friends = require("../data/friends");

// routing
module.exports = function(app) {
    // API HTML GET Requests
    // Below code handles when users visit a page
    // In each of the below cases the user is shown an HTML page of content
    // This will be used to display a JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API HTML POST Requests
    // Below code handles when a user submits a form and thus submits data to the server
    // JSON is pushed to appropriate JavaScript array
    // Used to handle incoming survey results. This route will also be used to handle 
    // ...compatibility logic. 
    app.post("/api/friends", function(req, res) {
        // req.body is available since we're using the body-parser middleware
        var newUser = req.body;
        var newUserScores = newUser.scores;
        console.log("new user questions array: " + newUserScores);

        // compare score arrays and find the closest matching friend
        var currentClosestMatch;
        var currentClosestMatchDifference;
        for (var i = 0; i < friends.length; i++) {

            // get next friend to compare
            var newFriendToCompare = friend[i];
            var newFriendToCompareScores = newFriendToCompare.scores;

            // calculate total difference between current friend and new user
            var totalDifference = 0;
            for (var j = 0; j < newUserScores.length; j++) {
                // calculate difference between scores
                var diff = parseInt(newUserScores[j]) - parseInt(newFriendToCompareScores[j]);
                // add absolute value of difference to totalDifference
                totalDifference += Math.abs(diff);
            } // loop through score of one friend

            if (totalDifference < currentClosestMatchDifference) {
                // newFriendToCompare is currentClosestMatch to newUser
                currentClosestMatch = newFriendToCompare;
            }

        } // loop through friends
        
        // after comparing to currently stored friends, push to friends data api
        friends.push(newUser);

        // once you've found the current user's most comatible friend, display the result as a modal pop-up. 
        console.log("friend who matches new user the most: " + currentClosestMatch.name);
        
        // The modal should display both the name and picture of the closest match.
    });

}


