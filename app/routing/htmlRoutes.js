// ======================================================================
// Survey should have 10 questions of your choosing. Each 
// ...answer should be on a scale of 1 to 5 based on how much the user
// ...agrees or disagrees with a question.
// ======================================================================
var path = require("path");

// routing
module.exports = function(app) {

    // If no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}