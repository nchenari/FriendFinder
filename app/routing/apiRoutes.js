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
        friends.push(req.body);

        // handle friend compatibility logic here

        // convert each user's results into a simple array of numbers
        // comare the difference between current user's score against those from other users,
        // ...question by question. Add up the differences to calculate the totalDifference
        var totalDifference = 0;

        // once you've found the current user's most comatible friend, display the result
        // ...as a modal pop-up. THe modal should display both the name and picture of the closest match.
        
    });
}