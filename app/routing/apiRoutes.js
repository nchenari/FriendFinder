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

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API HTML POST Requests
    // Below code handles when a user submits a form and thus submits data to the server
    // JSON is pushed to appropriate JavaScript array

    api.post("/api/friends", function(req, res) {
        // req.body is available since we're using the body-parser middleware
        friends.push(req.body);
    });
}